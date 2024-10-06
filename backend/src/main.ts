import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // Создаем конфигурацию для Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API для работы с уровнями')
    .setVersion('1.0')
    .build();

  // Создаем документ Swagger на основе конфигурации и приложения
  const document = SwaggerModule.createDocument(app, config);

  // Подключаем Swagger модуль и указываем, по какому пути будет доступна документация
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
