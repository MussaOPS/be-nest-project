import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class DatabaseCache {
    @PrimaryGeneratedColumn()
    key: string;

    @Column()
    payload: JSON;

    @CreateDateColumn
    created: Date;

    @Column()
    expired: Date;
}
