import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {JwtService} from '@nestjs/jwt';
import {IUsersService} from "../users.interface";
import {User} from "../../entity/user.entity";
import {UserSignUpRequestDto} from "../../dto/user-sign-up-request.dto";
import {UserSignInRequestDto} from "../../dto/user-sign-in-request.dto";
import {PasswordUtil} from "../../util/password.util";

@Injectable()
export class UsersService implements IUsersService {

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) {
    }

    async signUp(createUserDto: UserSignUpRequestDto): Promise<User> {

        const hashedPassword = await PasswordUtil.hashPassword(createUserDto.password);

        const user = this.usersRepository.create({
            ...createUserDto,
            password: hashedPassword,
        });

        return this.usersRepository.save(user);
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
