import {Entity} from "typeorm";

@Entity()
export class User {
    id: number;
    categoryId: number;
    userId: string;
    created: Date;
    updated: Date;
}
