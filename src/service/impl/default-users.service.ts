import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {DataSource, QueryFailedError, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from "../users.interface";
import {User} from "../../entity/user.entity";
import {PasswordUtil} from "../../util/password.util";
import {JwtResponseDto} from "../../dto/jwt-response.dto";
import {CommonBusinessException} from "../../errors/exception/common.business-exception";
import {CommonValidationException} from "../../errors/exception/common.validation-exception";

@Injectable()
export class DefaultUsersService implements UsersService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly dataSource: DataSource,
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {
    }

    async signUp(user: User, password: string): Promise<User> {

        try {
            user.password = await PasswordUtil.hashPassword(password);

            return this.usersRepository.create(user);
        } catch (e) {
            if (e instanceof QueryFailedError) {
                const errorMessage = e.driverError?.message || '';

                if (errorMessage.includes('null value in column')) {
                    throw new CommonValidationException('VALIDATION_ERROR','Required fields are missing');
                }
                if (errorMessage.includes('duplicate key value violates unique constraint')) {
                    throw new CommonBusinessException('USER_ALREADY_EXITS','User already exists');
                }
            }

            // Неизвестные ошибки
            throw new Error('An unexpected error occurred');
        }
    }

    async signIn(login: string, password: string): Promise<JwtResponseDto> {

        //todo: по regex определить логин или email

        //todo подумать

        const {usernameOrEmail, password} = loginUserDto;

        const user = await this.usersRepository.findOne({
            where: [{username: usernameOrEmail}, {email: usernameOrEmail}],
        });

        if (!user || !(await PasswordUtil.comparePassword(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return this.jwtService.sign({userId: user.id});
    }

    async updateUser(user: User): Promise<void> {

    }

    async getProfile(username: string): Promise<User> {

        const user = await this.usersRepository.findOneBy({username: username});

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async deleteUser(username: string): Promise<void> {

        await this.usersRepository.delete({username: username});
    }

    async resetUsersPassword() {

        await this.dataSource.transaction(async (manager) => {

            const pageSize = 1000;
            let page = 0;

            while (true) {
                const users = await manager
                    .getRepository(User)
                    .createQueryBuilder('user')
                    .setLock('pessimistic_write')
                    .orderBy('user.id', 'ASC')
                    .skip(page * pageSize)
                    .take(pageSize)
                    .getMany();

                if (users.length === 0) {
                    break;
                }

                users.forEach((user) => {
                    user.password = null;
                });

                await manager.save(users);

                page++;
            }
        });
    }
}
