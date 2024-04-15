import { Inject, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/books/dtos/bookDTO';
import { BOOK_REPOSITORY } from 'src/books/repositories/book-repository.interface';
import { BookRepositoryService } from 'src/books/repositories/book-repository.service';

@Injectable()
export class BookService {

    constructor(
        @Inject(BOOK_REPOSITORY)
        private readonly bookRepository: BookRepositoryService,
    ){}

    findAll(){
        return this.bookRepository.findAll();
    }

    findOne(id: number){
        return this.bookRepository.findOne(id);
    }

    create(book: BookDTO){
        return this.bookRepository.create(book);
    }

    update(id: number, book: BookDTO){
        return this.bookRepository.update(id, book);
    }

    delete(id: number){
        return this.bookRepository.delete(id);
    }
}
