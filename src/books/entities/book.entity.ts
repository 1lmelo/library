import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    author: string;

    @Column()
    yearPublisher: number;

    @Column()
    bin: number;

    @Column({default: true})
    isActive: boolean;
}