import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserProducts {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    categoryId: number;

    @Column()
    userId: string;

    @Column()
    created: Date;

    @Column()
    updated: Date;
}
