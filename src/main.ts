import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true, // Báo lỗi nếu có thuộc tính không được whitelist
    }),
  );

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `App running on url: http://localhost:${process.env.PORT ?? 3000}`,
  );
}
bootstrap();
