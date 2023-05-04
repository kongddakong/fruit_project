import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  )
  const config = new DocumentBuilder()
  .setTitle('Fruit API Documentation')
  .setDescription('과일 프로젝트의 API 문서입니다.')
  .setVersion('1.0')
  .addTag('fruit')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(8000);
}
bootstrap();
