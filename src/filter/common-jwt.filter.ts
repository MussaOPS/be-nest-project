import {Injectable, NestMiddleware, UnauthorizedException} from "@nestjs/common";
import {NextFunction} from "express";
import {UserContextHolder, UserInfoDto} from "../model/user-context-holder.model";
import * as jwt from 'jsonwebtoken';
import {AppConstants} from "../constant/app.constants";

@Injectable()
export class CommonJwtTokenFilter implements NestMiddleware {
    private userContextHolder: UserContextHolder;

    constructor() {
        this.userContextHolder = UserContextHolder.getInstance();
    }

    use(req: Request, res: Response, next: NextFunction): void {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            this.userContextHolder.refresh(); // Clear user context if no valid token
            throw new UnauthorizedException('Authorization token not found');
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, AppConstants.JWT_SECRET_KEY) as UserInfoDto;

            const userInfo: UserInfoDto = {
                id: decoded.id,
                name: decoded.name,
                email: decoded.email,
                roles: decoded.roles,
            };

            this.userContextHolder.save(userInfo);
            next();
        } catch (error) {
            this.userContextHolder.refresh(); // Clear user context on error
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}
