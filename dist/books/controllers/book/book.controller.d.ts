import { BookDTO } from 'src/books/dtos/bookDTO';
import { BookService } from 'src/books/services/book/book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(): Promise<import("../../entities/book.entity").Book[]>;
    getBook(id: number): Promise<import("../../entities/book.entity").Book>;
    createBook(book: BookDTO): Promise<import("../../entities/book.entity").Book>;
    updateBook(id: number, book: BookDTO): Promise<import("../../entities/book.entity").Book>;
    deleteBook(id: number): Promise<import("../../entities/book.entity").Book>;
}
