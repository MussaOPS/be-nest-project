import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {User} from "../entity/user.entity";
import {jwtConstants} from "../constant/app.constants";
import {DefaultUsersService} from "../service/impl/default-users.service";
import {JwtStrategy} from "../util/jwt.strategy";
import {UsersController} from "../api/users.controller";
import {UserAdditionalInfoEntity} from "../entity/user-additional-info.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, UserAdditionalInfoEntity]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '1d'},
        }),
    ],
    providers: [
        {
            provide: 'UsersService',
            useClass: DefaultUsersService,
        },
        DefaultUsersService,
        JwtStrategy,
    ],
    controllers: [UsersController],
})

export class UsersModule {
}
