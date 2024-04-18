import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './domains/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './domains/menu/menu.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
