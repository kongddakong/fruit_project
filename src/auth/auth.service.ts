import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
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

    async login(user:any){
        const payload = {user: { name: user.name, id: user.id}};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
