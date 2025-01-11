import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "./user.module";
import {BooksModule} from "./books.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'pwd',
            database: 'library',
            autoLoadEntities: true,
            synchronize: true,
        }),
        UsersModule,
        BooksModule,
    ],
})

export class AppModule {
}
