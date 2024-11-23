import {IsNotEmpty} from "class-validator";

export class UserSignInRequestDto {

    @IsNotEmpty()
    usernameOrEmail: string;

    @IsNotEmpty()
    password: string;
}
