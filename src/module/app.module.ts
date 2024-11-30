import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppDataSource} from "../../data-source";
import {UsersModule} from "./user.module";
import {ProductModule} from "./product.module";

@Module({
    imports: [
        UsersModule,
        ProductModule,
        TypeOrmModule.forRoot(AppDataSource.options)
        //todo add mongoose
    ],
})

export class AppModule {
}
