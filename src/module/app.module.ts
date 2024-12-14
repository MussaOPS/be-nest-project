import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "./user.module";
import {ProductsModule} from "./product.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'pwd',
            database: 'be_nest_education',
            autoLoadEntities: true,
            synchronize: true,
        }),
        MongooseModule.forRoot('mongodb://localhost:27017/be_nest_education'),
        UsersModule,
        ProductsModule,
    ],
})

export class AppModule {
}
