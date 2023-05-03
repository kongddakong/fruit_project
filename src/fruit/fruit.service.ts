import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fruit } from './fruit.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';


@Injectable()
//@ChangeFruit('strawberry')  
export class FruitService {
    count: number;
    readonly name: string;
    readonly userId: number;

    constructor(
        @InjectRepository(Fruit)
        private fruitRepository: Repository<Fruit>
    ){
        this.chkInventory();
        this.name = 'fruit';
        this.userId = 1;
    }

    async chk() : Promise<string> {
        await this.chkInventory();
        return `There are ${this.count} ${this.name}`
    }

    buy(n:number): string{
        this.count += n;
        return `I bought ${n} ${this.name}`
    }

    eat(n:number): string {
        this.count -= n;
        return `Let's eat ${n} ${this.name}`
    }

    async chkInventory() {
        const fruit = await this.fruitRepository.findOneBy({id:this.userId});
        this.count = fruit.inventory;
    }

    async get(userid:number) {
        return await this.fruitRepository.findOne({
            relations: ['user'],
            where: {
                id: userid,
            }
        })
    }
}
