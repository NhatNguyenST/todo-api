import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true, // Báo lỗi nếu có thuộc tính không được whitelist
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Todo APIs')
    .setDescription(
      'The Todo APIs to check knowledge about nestjs/docker/postgres',
    )
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `App running on url: http://localhost:${process.env.PORT ?? 3000}`,
  );
}
bootstrap();
