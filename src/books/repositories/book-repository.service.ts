import { Injectable } from '@nestjs/common';
import { IBookRepository } from './book-repository.interface';
import { BookDTO } from '../dtos/bookDTO';
import { Book } from '../entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookRepositoryService implements IBookRepository {

    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ){}

    findAll(): Promise<Book[]> {
        return this.bookRepository.find();
    }

    findOne(id: number): Promise<Book | undefined> {
        return this.bookRepository.findOne({ where: { id } });
    }

    create({ name, author, bin, yearPublisher, isActive }: BookDTO): Promise<Book> {
        const book = this.bookRepository.create({ name, author, bin, yearPublisher, isActive });
        return this.bookRepository.save(book);
    }

    update(id: number, bookDto: BookDTO): Promise<Book | undefined> {

        const existingBook = this.bookRepository.findOne({ where: { id } });

        if (!existingBook) {
            return undefined;
        }

        this.bookRepository.update(id, bookDto);
        return this.bookRepository.findOne({ where: { id } });
    }

    delete(id: number): Promise<Book> {
        return this.bookRepository.findOne({ where: { id } })
            .then((bookToRemove) => {
                if (!bookToRemove) {
                    throw new Error(`Book with ID ${id} not found`);
                }
                return this.bookRepository.remove(bookToRemove);
            });
    }
    
}
