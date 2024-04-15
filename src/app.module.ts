import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:  '123123',
    database: 'library',
    synchronize: true,
    logging: true,
    entities: [Book],
  }),
  BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
