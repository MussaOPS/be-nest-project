import {User} from "../entity/user.entity";
import {JwtResponseDto} from "../dto/jwt-response.dto";

export interface UsersService {

    signUp(user: User, password: string): Promise<User>;

    signIn(login: string, password: string): Promise<JwtResponseDto>;

    updateUser(user: User): Promise<void>;

    getProfile(username: string): Promise<User>;

    deleteUser(username: string): Promise<void>;
}
