import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './domains/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './domains/menu/menu.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    MenuModule,
    AuthModule],

})
export class AppModule {}
