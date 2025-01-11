import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Books} from "../entity/books.entity";
import {DefaultBooksService} from "../service/impl/default-books.service";
import {BooksController} from "../api/books.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Books]),
    ],
    providers: [
        {
            provide: 'BooksService',
            useClass: DefaultBooksService,
        },
        DefaultBooksService,
    ],
    controllers: [BooksController],
})

export class BooksModule {
}
