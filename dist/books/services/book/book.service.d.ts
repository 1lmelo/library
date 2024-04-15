import { BookDTO } from 'src/books/dtos/bookDTO';
import { BookRepositoryService } from 'src/books/repositories/book-repository.service';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepositoryService);
    findAll(): Promise<import("../../entities/book.entity").Book[]>;
    findOne(id: number): Promise<import("../../entities/book.entity").Book>;
    create(book: BookDTO): Promise<import("../../entities/book.entity").Book>;
    update(id: number, book: BookDTO): Promise<import("../../entities/book.entity").Book>;
    delete(id: number): Promise<import("../../entities/book.entity").Book>;
}
