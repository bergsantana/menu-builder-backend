import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/domains/user/user.module';
import { JwtModule } from '@nestjs/jwt';
require("dotenv").config();

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: process.env.JWT_TTL},
    }),

  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
 