import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppDataSource} from "../../data-source";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        // UsersModule,
        OrderModule,
        TypeOrmModule.forRoot(AppDataSource.options),
        MongooseModule.forRoot('mongodb://localhost/nest'),
    ],
})

export class AppModule {
}
