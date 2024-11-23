import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';
import {UsersRole} from "../enum/user-role.enum";

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

    @Column({nullable: true})
    avatar: string;

    @Column({nullable: true})
    address: string;

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
