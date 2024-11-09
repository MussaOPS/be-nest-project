import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {UsersRole} from "../enums/user.role.enum";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    productId: string;

    @Column()
    price: number;

    @Column()
    count: number;

    @Column()
    created: Date;

    @Column()
    updated: Date;
}
