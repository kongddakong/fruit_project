import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService
    ){}

    async validateUser(name:string, pass: string): Promise<any> {
        const user = await this.userService.findOne(name);
        const hash = createHash('sha512')
        .update(pass ?? '')
        .digest('hex');

        console.log(name);
        console.log(hash);
        console.log(user);
        if (user && user?.pswd === hash) {
            const { pswd, ...result } = user;
            return result;
        }

        return null;
    }
}
