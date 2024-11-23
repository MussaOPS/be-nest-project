import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {DataSource, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {JwtService} from '@nestjs/jwt';
import {IUsersService} from "../users.interface";
import {User} from "../../entity/user.entity";
import {UserSignUpRequestDto} from "../../dto/user-sign-up-request.dto";
import {UserSignInRequestDto} from "../../dto/user-sign-in-request.dto";
import {PasswordUtil} from "../../util/password.util";
import {UserAdditionalInfoEntity} from "../../entity/user-additional-info.entity";
import {UserAdditionalInfoModel} from "../../model/user-additional-info.model";
import {JsonUtil} from "../../util/json.util";

@Injectable()
export class UsersService implements IUsersService {

    constructor(
        private readonly dataSource: DataSource,
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @InjectRepository(UserAdditionalInfoEntity)
        private readonly userAdditionalInfoRepository: Repository<UserAdditionalInfoEntity>,
        private readonly jwtService: JwtService,
    ) {
    }

    async signUp(createUserDto: UserSignUpRequestDto): Promise<User> {

        return await this.dataSource.transaction(async (manager) => {
            // Создаем дополнительную информацию
            const userAdditionalInfo = new UserAdditionalInfoModel(createUserDto.avatar, createUserDto.address);
            const userAdditionalInfoJsonString = JsonUtil.stringify<UserAdditionalInfoModel>(userAdditionalInfo);

            // Создаем и сохраняем UserAdditionalInfoEntity
            const userAdditionalInfoEntity = manager.create(UserAdditionalInfoEntity, {
                data: userAdditionalInfoJsonString,
            });
            const savedUserAdditionalInfoEntity = await manager.save<UserAdditionalInfoEntity>(userAdditionalInfoEntity);

            // Хэшируем пароль
            const hashedPassword = await PasswordUtil.hashPassword(createUserDto.password);

            // Создаем и сохраняем пользователя
            const user = manager.create(User, {
                username: createUserDto.username,
                email: createUserDto.email,
                firstName: createUserDto.firstName,
                lastName: createUserDto.lastName,
                phone: createUserDto.phone,
                role: createUserDto.role,
                userAdditionalInfoId: savedUserAdditionalInfoEntity.id,
                password: hashedPassword,
            });

            return manager.save(User, user);
        });
    }

    async signIn(loginUserDto: UserSignInRequestDto): Promise<string> {

        const {usernameOrEmail, password} = loginUserDto;

        const user = await this.usersRepository.findOne({
            where: [{username: usernameOrEmail}, {email: usernameOrEmail}],
        });

        if (!user || !(await PasswordUtil.comparePassword(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return this.jwtService.sign({userId: user.id});
    }

    async getProfile(userId: string): Promise<User> {

        const user = await this.usersRepository.findOneBy({id: userId});

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async deleteUser(userId: string): Promise<void> {

        await this.usersRepository.delete(userId);
    }
}
