import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { FruitService } from './fruit.service';
import {Result as FruitResult } from './result/result.interface'

@Controller('fruit')
export class FruitController {
    constructor(private fruitService: FruitService) {}

    @Get('/')
    getFruit(): FruitResult {
        return { msg: this.fruitService.chk(), remain: this.fruitService.count }
    }
    
    @Post('/buy')
    @HttpCode(201)
    buyFruit(): FruitResult{
        return { msg:this.fruitService.buy(1), remain: this.fruitService.count}
    }

    @Post('/buy/:count')
    @HttpCode(201)
    buyFruits(@Param('count') count:string): FruitResult{
        return{
            msg: this.fruitService.buy(parseInt(count, 10)),
            remain: this.fruitService.count
        }
    }

    @Get('/eat')
    async eatFruit(): Promise<object> {
        return {msg: this.fruitService.eat(1), remain: this.fruitService.count}
    }

    @Get('/eat/:count')
    eatFruits(@Param('count') count:string): FruitResult {
        return {
            msg: this.fruitService.eat(parseInt(count, 10)),
            remain: this.fruitService.count,
        }
    }

}
