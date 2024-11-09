import { Controller, Get, Post, Delete, Param, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("Пользователи")
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Создать нового пользователя" })
  @ApiResponse({
    status: 201,
    description: "Пользователь успешно создан",
    type: User,
  })
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @ApiOperation({ summary: "Получить пользователя по имени пользователя" })
  @ApiResponse({ status: 200, description: "Пользователь найден", type: User })
  @Get(":username")
  async findOne(@Param("username") username: string): Promise<User> {
    return this.userService.findByUsername(username);
  }

  @ApiOperation({ summary: "Удалить пользователя по идентификатору" })
  @ApiResponse({ status: 200, description: "Пользователь успешно удален" })
  @Delete(":id")
  async remove(@Param("id") id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
