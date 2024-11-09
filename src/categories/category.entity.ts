import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name_ru: string;

    @Column()
    name_kk: string;

    @Column()
    name_en: string;

    @Column()
    created: Date;

    @Column()
    updated: Date;
}
