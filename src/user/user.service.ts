import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findOne(username:string): Promise<User | undefined> {
        const user = await this.userRepository.findOneBy({ name:username });
        return user;
    }
}
