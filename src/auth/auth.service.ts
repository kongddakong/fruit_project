import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService
    ){}

    async validateUser(username:string, pass: string): Promise<any> {
        const user = await this.userService.findOne(username);
        const hash = createHash('sha512')
        .update(pass ?? '')
        .digest('hex');

        if (user && user?.pswd === hash) {
            const { pswd, ...result } = user;
            return result;
        }

        return null;
    }
}
