import {Injectable} from "@nestjs/common";
import {BooksService} from "../books.service";
import {DataSource, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Books} from "../../entity/books.entity";

@Injectable()
export class DefaultBooksService implements BooksService {

    constructor(
        private readonly dataSource: DataSource,
        @InjectRepository(Books)
        private readonly booksRepository: Repository<Books>,
    ) {
    }

    async createBook(book: any): Promise<void> {
        return undefined;
    }

    async getBooks(): Promise<void> {
        return undefined;
    }

    async getBookById(bookId: string): Promise<void> {
        return undefined;
    }

    async updateBook(bookId: string, book: any): Promise<void> {
        return undefined;
    }

    async deleteBook(bookId: string): Promise<void> {
        return undefined;
    }
}
