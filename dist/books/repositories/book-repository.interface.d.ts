import { BookDTO } from "../dtos/bookDTO";
import { Book } from "../entities/book.entity";
export declare const BOOK_REPOSITORY = "BOOK_REPOSITORY";
export interface IBookRepository {
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | undefined>;
    create(book: BookDTO): Promise<Book>;
    update(id: number, book: BookDTO): Promise<Book | undefined>;
    delete(id: number): Promise<Book>;
}
