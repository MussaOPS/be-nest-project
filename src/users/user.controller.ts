import {Controller, Get, Post, Delete, Param, Body, HttpStatus, HttpCode, Put, Header, Headers} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {ApiTags, ApiOperation, ApiResponse} from "@nestjs/swagger";

@ApiTags("Пользователи")
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @ApiOperation({summary: "Создать нового пользователя"})
    @ApiResponse({
        status: 201,
        description: "Пользователь успешно создан",
        type: User,
    })
    @Post()
    @HttpCode(201)
    async create(@Body() user: User): Promise<User> {
        return this.userService.createUser(user);
    }

    @ApiOperation({summary: "Создать идемпотентноо нового пользователя"})
    @ApiResponse({
        status: 201,
        description: "Пользователь успешно создан",
        type: User,
    })
    @Put("/idempotency")
    @HttpCode(201)
    async createIdempotencyUser(
        @Body() user: User,
        @Headers('Idempotency-Key') idempotencyKey: string,
    ): Promise<User> {
        return this.userService.createIdempotencyUser(idempotencyKey, user);
    }

    @ApiOperation({summary: "Создать нового пользователя"})
    @ApiResponse({
        status: 201,
        description: "Пользователь успешно создан",
        type: User,
    })
    @Put(":id")
    @HttpCode(201)
    async update(@Body() user: User, @Param("id") id: string): Promise<User> {
        return this.userService.updateUser(id, user);
    }


    @ApiOperation({summary: "Получить пользователя по имени пользователя"})
    @ApiResponse({status: 200, description: "Пользователь найден", type: User})
    @Get(":username")
    async findOne(@Param("username") username: string): Promise<User> {
        return this.userService.findByUsername(username);
    }

    @ApiOperation({summary: "Удалить пользователя по идентификатору"})
    @ApiResponse({status: 200, description: "Пользователь успешно удален"})
    @Delete(":id")
    async remove(@Param("id") id: number): Promise<void> {
        await this.userService.deleteUser(id);
    }
}
