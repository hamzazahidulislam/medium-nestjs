if (!process.env.IT_TS_NODE) {
  require('module-alias/register');
}
import { AppModule } from '@app/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3001);
}
bootstrap();
