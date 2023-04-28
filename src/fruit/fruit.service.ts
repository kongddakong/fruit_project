import { Injectable } from '@nestjs/common';

@Injectable()
export class FruitService {
    public count: number;
    private readonly name: string;

    constructor(){
        this.count = 0
        this.name = 'fruit'
    }

    chk() : string {
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
}
