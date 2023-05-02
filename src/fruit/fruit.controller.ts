import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { FruitService } from './fruit.service';
import {Result as FruitResult } from './result/result.interface'
import { SupplyDto } from './dto/supply';

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
    buyFruits(@Param('count', ParseIntPipe) count:number): FruitResult{
        return{
            msg: this.fruitService.buy(count),
            remain: this.fruitService.count
        }
    }

    @Get('/eat')
    async eatFruit(): Promise<object> {
        return {msg: this.fruitService.eat(1), remain: this.fruitService.count}
    }

    @Get('/eat/:count')
    eatFruits(@Param('count', ParseIntPipe) count:number): FruitResult {
        return {
            msg: this.fruitService.eat(count),
            remain: this.fruitService.count,
        }
    }

    @Post('/supply')
    @HttpCode(201)
    supplyFruits(@Body(ValidationPipe) supplyDto: SupplyDto): FruitResult {
        return {
            msg:
            this.fruitService.buy(
                supplyDto.box * supplyDto.pcs + (supplyDto.bonus ?? 0),
            ) + (supplyDto.msg ?? ''),
            remain: this.fruitService.count,
        }
    }

}
