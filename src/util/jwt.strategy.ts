import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {AppConstants} from "../constant/app.constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {

        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: AppConstants.JWT_SECRET_KEY,
        });
    }

    async validate(payload: any) {

        return {userId: payload.userId};
    }
}
