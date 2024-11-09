import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class User {
  @ApiProperty({
    example: 1,
    description: "Уникальный идентификатор пользователя",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "john_doe", description: "Имя пользователя" })
  @Column({ unique: true })
  username: string;

  @ApiProperty({
    example: "john@example.com",
    description: "Email пользователя",
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: "password123", description: "Пароль пользователя" })
  @Column()
  password: string;

  @ApiProperty({ example: "John Doe", description: "Полное имя пользователя" })
  @Column()
  fullName: string;
}
