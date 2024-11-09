import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {User} from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {
    }

    async createUser(user: User): Promise<User> {
        const existingUser = await this.usersRepository.findOne({where: {username: user.username}});

        if (existingUser) {
            throw new HttpException('Username already exists', HttpStatus.BAD_REQUEST);
        }

        const hashedPassword = user.password + "123";

        const newUser = this.usersRepository.create({
            ...user,
            password: hashedPassword,
        });

        return this.usersRepository.save(newUser);
    }

    async createIdempotencyUser(idempotencyKey: string, user: User): Promise<User> {


        if (existingUser) {
            throw new HttpException('Username already exists', HttpStatus.BAD_REQUEST);
        }

        const hashedPassword = user.password + "123";

        const newUser = this.usersRepository.create({
            ...user,
            password: hashedPassword,
        });
    }

    async updateUser(id: string, user: User): Promise<User> {
        const existingUser = await this.usersRepository.findOne({where: {id}});

        if (!existingUser) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        return await this.usersRepository.save({
            ...existingUser,
            ...user,
        });
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.usersRepository.findOne({where: {username}});

        if (user) {
            return user;
        }

        throw new HttpException({
            status: HttpStatus.NOT_FOUND,
            error: 'User with username ${username} not found',
        }, HttpStatus.NOT_FOUND);
    }

    async deleteUser(id: number): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }
}
