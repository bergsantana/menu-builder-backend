import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserSchema } from './models/user/user.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //console.log('Here you are', UserSchema)
  await app.listen(3000);
}
bootstrap();
