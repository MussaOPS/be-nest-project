import * as bcrypt from 'bcrypt';

export class PasswordUtil {

    static async hashPassword(password: string): Promise<string> {

        const salt = await bcrypt.genSalt();

        return bcrypt.hash(password, salt);
    }

    static async comparePassword(password: string, hash: string): Promise<boolean> {

        return bcrypt.compare(password, hash);
    }
}
