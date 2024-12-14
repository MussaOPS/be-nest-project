// import {Body, Controller, Delete, Get, Post, Req, UseGuards,} from '@nestjs/common';
// import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
// import {AuthGuard} from '@nestjs/passport';
// import {DefaultUsersService} from "../service/impl/default-users.service";
// import {User} from "../entity/user.entity";
// import {UserSignUpRequestDto} from "../dto/user-sign-up-request.dto";
// import {UserSignInRequestDto} from "../dto/user-sign-in-request.dto";
//
// @ApiTags('Users')
// @Controller('users')
// export class UsersController {
//     constructor(private readonly usersService: DefaultUsersService) {
//     }
//
//     @Post('sign-up')
//     @ApiOperation({summary: 'User registration'})
//     @ApiResponse({status: 201, description: 'User successfully registered.'})
//     signUp(@Body() createUserDto: UserSignUpRequestDto): Promise<User> {
//         return this.usersService.signUp(createUserDto);
//     }
//
//     @Post('sign-in')
//     @ApiOperation({summary: 'User login'})
//     @ApiResponse({status: 200, description: 'User successfully logged in.'})
//     signIn(@Body() loginUserDto: UserSignInRequestDto): Promise<string> {
//         return this.usersService.signIn(loginUserDto);
//     }
//
//     @Get('profile')
//     @UseGuards(AuthGuard('jwt'))
//     @ApiBearerAuth()
//     @ApiOperation({summary: 'Get user profile'})
//     @ApiResponse({status: 200, description: 'User profile retrieved successfully.'})
//     getProfile(@Req() req): Promise<User> {
//         return this.usersService.getProfile(req.user.userId);
//     }
//
//     @Delete('delete')
//     @UseGuards(AuthGuard('jwt'))
//     @ApiBearerAuth()
//     @ApiOperation({summary: 'Delete user account'})
//     @ApiResponse({status: 200, description: 'User account deleted successfully.'})
//     deleteUser(@Req() req): Promise<void> {
//         return this.usersService.deleteUser(req.user.userId);
//     }
// }
