import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDTO } from 'src/domains/user/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 
  @HttpCode(HttpStatus.OK)
  @Post('login')
    login(@Body() loginDTO: LoginDTO){
      return this.authService.login(loginDTO.email, loginDTO.password)
    }
}
