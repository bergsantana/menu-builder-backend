import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserSchema } from './models/user/user.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
