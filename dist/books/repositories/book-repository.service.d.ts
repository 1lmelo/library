import { IBookRepository } from './book-repository.interface';
import { BookDTO } from '../dtos/bookDTO';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';
export declare class BookRepositoryService implements IBookRepository {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | undefined>;
    create({ name, author, bin, yearPublisher, isActive }: BookDTO): Promise<Book>;
    update(id: number, bookDto: BookDTO): Promise<Book | undefined>;
    delete(id: number): Promise<Book>;
}
