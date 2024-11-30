import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppDataSource} from "../../data-source";
import {UsersModule} from "./user.module";

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot(AppDataSource.options)
    ],
})

export class AppModule {
}
