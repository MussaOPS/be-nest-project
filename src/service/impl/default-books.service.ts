import {Injectable} from "@nestjs/common";
import {BooksService} from "../books.service";

@Injectable()
export class DefaultBooksService implements BooksService {

    constructor(private readonly booksService: BooksService) {
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
