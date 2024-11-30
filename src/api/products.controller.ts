import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Post, Req, UseGuards} from "@nestjs/common";
import {DefaultUsersService} from "../service/impl/default-users.service";
import {UserSignUpRequestDto} from "../dto/user-sign-up-request.dto";
import {User} from "../entity/user.entity";
import {UserSignInRequestDto} from "../dto/user-sign-in-request.dto";
import {AuthGuard} from "@nestjs/passport";
import {DefaultProductsService} from "../service/impl/default-products.service";

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: DefaultProductsService) {
    }

    @Post('create')
    @ApiOperation({summary: 'Product creation'})
    @ApiResponse({status: 201, description: 'Product successfully created.'})
    signUp(@Body() request: ProductCreateRequestDto): Promise<void> {
        return this.productsService.createProduct(request);
    }

    @Post('sign-in')
    @ApiOperation({summary: 'User login'})
    @ApiResponse({status: 200, description: 'User successfully logged in.'})
    signIn(@Body() loginUserDto: UserSignInRequestDto): Promise<string> {
        return this.usersService.signIn(loginUserDto);
    }

    @Get('profile')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get user profile'})
    @ApiResponse({status: 200, description: 'User profile retrieved successfully.'})
    getProfile(@Req() req): Promise<User> {
        return this.usersService.getProfile(req.user.userId);
    }

    @Delete('delete')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({summary: 'Delete user account'})
    @ApiResponse({status: 200, description: 'User account deleted successfully.'})
    deleteUser(@Req() req): Promise<void> {
        return this.usersService.deleteUser(req.user.userId);
    }
}
