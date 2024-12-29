import {Injectable} from '@nestjs/common';

export class UserInfoDto {
    id: string;
    name: string;
    email: string;
    roles: string[];
}

@Injectable()
export class UserContextHolder {
    private static instance: UserContextHolder;
    private userInfo: UserInfoDto | null = null;

    private constructor() {
    }

    static getInstance(): UserContextHolder {
        if (!UserContextHolder.instance) {
            UserContextHolder.instance = new UserContextHolder();
        }
        return UserContextHolder.instance;
    }

    // Save user information
    save(userInfo: UserInfoDto): void {
        this.userInfo = userInfo;
    }

    // Refresh user information (clear it)
    refresh(): void {
        this.userInfo = null;
    }

    // Get user information
    getUserInfo(): UserInfoDto | null {
        return this.userInfo;
    }
}
