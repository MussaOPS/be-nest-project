export interface BooksService {

    createBook(book: any): Promise<void>;

    getBooks(): Promise<void>;

    getBookById(bookId: string): Promise<void>;

    updateBook(bookId: string, book: any): Promise<void>;

    deleteBook(bookId: string): Promise<void>;
}
