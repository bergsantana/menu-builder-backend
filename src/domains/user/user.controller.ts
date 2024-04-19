import { Body, Controller, Get, Inject, Param, Post, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserInterface } from "src/models/user/user.schema";
import { LoginDTO } from "./login.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  
    @Post('create')
    createUser(@Body() user: UserInterface){
        return this.userService.create(user);
    }

    
    @UseGuards(AuthGuard)
    @Get('finduser/')
    finduser(@Query('email') email: string){
        return this.userService.findOne(email)
    }
} 