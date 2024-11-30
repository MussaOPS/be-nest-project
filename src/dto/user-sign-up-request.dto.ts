import {IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {UsersRole} from "../enum/user-role.enum";

export class UserSignUpRequestDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    avatar?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsEnum(UsersRole)
    role?: UsersRole;
}
