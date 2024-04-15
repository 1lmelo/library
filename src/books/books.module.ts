import { Module } from '@nestjs/common';
import { BookController } from './controllers/book/book.controller';
import { BookService } from './services/book/book.service';
import { BookRepositoryService } from './repositories/book-repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BOOK_REPOSITORY } from './repositories/book-repository.interface';

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BookController],
    providers: [
        BookService,
        { useClass: BookRepositoryService, provide: BOOK_REPOSITORY }],
  })
export class BooksModule {}
