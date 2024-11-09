import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {UsersRole} from "../enums/user.role.enum";

@Entity()
export class User {
    @ApiProperty({
        example: 1,
        description: "Уникальный идентификатор пользователя",
    })
    @PrimaryGeneratedColumn()
    id: string;

    @ApiProperty({example: "john_doe", description: "Имя пользователя"})
    @Column({unique: true})
    username: string;

    @ApiProperty({
        example: "john@example.com",
        description: "Email пользователя",
    })
    @Column({unique: true})
    email: string;

    @ApiProperty({example: "password123", description: "Пароль пользователя"})
    @Column()
    password: string;

    @ApiProperty({example: "John Doe", description: "Имя пользователя"})
    @Column()
    firstName: string;

    @ApiProperty({example: "Doe", description: "Фамилия пользователя"})
    @Column()
    lastName: string;

    @ApiProperty({example: "+77007272727", description: "Номер телефона пользователя"})
    @Column()
    phone: string;

    @ApiProperty({example: "test.png", description: "Аватарка пользователя"})
    @Column()
    avatar: string;

    @ApiProperty({example: "Сыганак 10", description: "Адрес пользователя"})
    @Column()
    address: string;

    @ApiProperty({example: "ADMIN", description: "Роль пользователя"})
    @Column()
    role: UsersRole;

    @ApiProperty({example: "2021-06-01T00:00:00.000Z", description: "Дата создания пользователя"})
    @CreateDateColumn()
    created: Date;

    @ApiProperty({example: "2021-06-01T00:00:00.000Z", description: "Дата обновления пользователя"})
    @UpdateDateColumn()
    updated: Date;
}
