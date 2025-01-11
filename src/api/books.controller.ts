import {ApiTags} from "@nestjs/swagger";
import {Controller} from "@nestjs/common";

@ApiTags('Books')
@Controller('books')
export class BooksController {

}
