import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import constants from 'src/config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(constants.PORT ?? 3000);
}
bootstrap();
