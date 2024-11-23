import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class UserAdditionalInfoEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'jsonb', nullable: true})
    data: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
