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

    @Column({
        type: 'jsonb',
        nullable: true,
    })
    userAdditionalInfo: Record<String, Object>;

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
