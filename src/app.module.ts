import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FruitModule } from './fruit/fruit.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import FruitDatasource from './common/datasource/fruit';

@Module({
  imports: [FruitModule, FruitDatasource],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
