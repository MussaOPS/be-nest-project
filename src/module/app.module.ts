import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "./user.module";
import {AppDataSource} from "../../data-source";

@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot(AppDataSource.options),
    ],
})

export class AppModule {
}
