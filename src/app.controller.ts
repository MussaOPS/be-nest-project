import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Test Controller")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: "Return Hello, World!" })
  @ApiResponse({ status: 200, description: "Hello, world!" })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
