import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { FruitService } from './fruit.service';
import {Result as FruitResult } from './result/result.interface'
import { SupplyDto } from './dto/supply';
import { SupplyInterceptor } from 'src/common/interceptor/supply.interceptor';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('과일 API')
@Controller('fruit')
export class FruitController {
    constructor(private fruitService: FruitService) {}

    @Get('/')
    async getFruit(): Promise<FruitResult> {
        const res = await this.fruitService.chk();
        return { msg: res, remain: this.fruitService.count }
    }
    
    @Post('/buy')
    @HttpCode(201)
    @ApiCreatedResponse({description: "과일을 사온 결과 값을 반환합니다.", type:FruitResult})
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
    @UseInterceptors(SupplyInterceptor)
    supplyFruits(@Body(ValidationPipe) supplyDto: SupplyDto): FruitResult {
       return {
        msg : this.fruitService.buy(supplyDto.total),
        remain:this.fruitService.count,
       }
    }

    @Get('/status/:userid')
    async get(@Param('userid', ParseIntPipe) userid:number): Promise<object> {
        return await this.fruitService.get(userid);
    }

}
