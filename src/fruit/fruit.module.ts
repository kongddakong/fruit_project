import { Module } from '@nestjs/common';
import { FruitController } from './fruit.controller';
import { FruitService } from './fruit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fruit } from './fruit.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fruit, User])],
  controllers: [FruitController],
  providers: [FruitService]
})
export class FruitModule {}
