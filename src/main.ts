import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("process.env.APP_PORT ", process.env.APP_PORT);
  await app.listen(parseInt(process.env.APP_PORT));
}
bootstrap();
