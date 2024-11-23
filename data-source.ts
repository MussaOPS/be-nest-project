import {DataSource} from 'typeorm';
import {User} from "./src/entity/user.entity";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pwd",
    database: "be_nest_education",
    entities: ['dist/src/**/*.entity.js'],
    // migrations: ['src/migrations/*.ts'],
    synchronize: true,
    logging: true,
});
