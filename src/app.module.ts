import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppService} from "./app.service";
import {UserModule} from "./users/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "pwd",
            database: "be_nest_education",
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize: true,
            logging: true,
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
