"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("../entities/book.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let BookRepositoryService = class BookRepositoryService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    findAll() {
        return this.bookRepository.find();
    }
    findOne(id) {
        return this.bookRepository.findOne({ where: { id } });
    }
    create({ name, author, bin, yearPublisher, isActive }) {
        const book = this.bookRepository.create({ name, author, bin, yearPublisher, isActive });
        return this.bookRepository.save(book);
    }
    update(id, bookDto) {
        const existingBook = this.bookRepository.findOne({ where: { id } });
        if (!existingBook) {
            return undefined;
        }
        this.bookRepository.update(id, bookDto);
        return this.bookRepository.findOne({ where: { id } });
    }
    delete(id) {
        return this.bookRepository.findOne({ where: { id } })
            .then((bookToRemove) => {
            if (!bookToRemove) {
                throw new Error(`Book with ID ${id} not found`);
            }
            return this.bookRepository.remove(bookToRemove);
        });
    }
};
exports.BookRepositoryService = BookRepositoryService;
exports.BookRepositoryService = BookRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookRepositoryService);
//# sourceMappingURL=book-repository.service.js.map