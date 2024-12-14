import {Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn,} from 'typeorm';

export enum UsersRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SELLER = 'SELLER',
}

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Index()
    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique: true})
    phone: string;

    @Column()
    userAdditionalInfoId: number;

    @Column({
        type: 'enum',
        enum: UsersRole,
        default: UsersRole.USER,
    })
    role: UsersRole;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
