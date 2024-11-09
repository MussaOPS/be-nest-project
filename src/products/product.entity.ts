import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {UsersRole} from "../enums/user.role.enum";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    count: number;

    @Column()
    categoryId: number;

    @Column()
    created: Date;

    @Column()
    updated: Date;
}
