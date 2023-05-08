import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request() req) {
        console.log('22222 '+req)
        return await req.user;
    }
}
