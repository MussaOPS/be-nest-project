import {Body, Controller, Delete, Get, Post, Put,} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {DefaultUsersService} from "../service/impl/default-users.service";
import {UserSignUpRequestDto} from "../dto/user-sign-up-request.dto";
import {UserSignInRequestDto} from "../dto/user-sign-in-request.dto";
import {ProfileResponseDto} from "../dto/profile-response.dto";
import {UserBuilder} from "../mapper/user-builder";
import {JwtResponseDto} from "../dto/jwt-response.dto";
import {User} from "../entity/user.entity";
import {UserUpdateRequestDto} from "../dto/user-update-request.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: DefaultUsersService) {
    }

    @Post('sign-up')
    @ApiOperation({summary: 'User registration'})
    @ApiResponse({status: 201, description: 'User successfully registered.'})
    async signUp(@Body() request: UserSignUpRequestDto): Promise<void> {

        const user: User = UserBuilder.buildEntity(request)

        await this.usersService.signUp(user, request.password);
    }

    @Post('sign-in')
    @ApiOperation({summary: 'User login'})
    @ApiResponse({status: 200, description: 'User successfully logged in.'})
    signIn(@Body() request: UserSignInRequestDto): Promise<JwtResponseDto> {

        return this.usersService.signIn(request.login, request.password);
    }

    @Get('profile')
    @ApiOperation({summary: 'Get user profile'})
    @ApiResponse({status: 200, description: 'User profile retrieved successfully.'})
    async getProfile(): Promise<ProfileResponseDto> {

        //todo: get from jwt token
        const username = 'admin';

        const user = await this.usersService.getProfile(username);

        return UserBuilder.buildProfile(user);
    }

    @Put('update')
    @ApiOperation({summary: 'Update user'})
    @ApiResponse({status: 200, description: 'User updated successfully.'})
    async updateUser(@Body() updateUserDto: UserUpdateRequestDto): Promise<void> {

        const user = UserBuilder.updateEntity(updateUserDto);

        await this.usersService.updateUser(user);
    }

    @Delete('delete')
    @ApiOperation({summary: 'Delete user account'})
    @ApiResponse({status: 200, description: 'User account deleted successfully.'})
    async deleteUser(): Promise<void> {

        //todo: get from jwt token
        const username = 'admin';

        await this.usersService.deleteUser(username);
    }
}
