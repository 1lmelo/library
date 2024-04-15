import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDTO } from 'src/books/dtos/bookDTO';
import { BookService } from 'src/books/services/book/book.service';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) {}

    @Get('/')
    getBooks() {
        return this.bookService.findAll();
    }

    @Get(':id')
    getBook(@Param('id') id: number) {
        return this.bookService.findOne(id);
    }

    @Post('/')
    createBook(@Body() book: BookDTO){
        return this.bookService.create(book);
    }

    @Put('/:id')
    updateBook(@Param('id') id: number, @Body() book: BookDTO){
        return this.bookService.update(id, book);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id: number){
        return this.bookService.delete(id);
    }
}

