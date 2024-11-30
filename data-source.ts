import {DataSource} from 'typeorm';
import {User} from "./src/entity/user.entity";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'nest',
    username: 'mongo',
    password: 'pwd',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    useUnifiedTopology: true,
    extra: {
        authSource: 'admin',
    },
    // type: 'postgres',
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "pwd",
    // database: "be_nest_education",
    // entities: ['dist/src/**/*.entity.js'],
    // synchronize: true,
    // logging: true,
});
