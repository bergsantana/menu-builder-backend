import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/domains/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService:  JwtService
  ){

  }
 

  async login(email: string, password: string)   : Promise<{access_token: string}> {
    const user = await this.userService.findOne(email)
    const isMatch = await bcrypt.compare(password, user.password)
    if(isMatch){
        return {
          access_token: await this.jwtService.signAsync({
            sub: user._id, firstName: user.firstName
          })
        }
    }else{
        throw new UnauthorizedException();
    }

}
}
