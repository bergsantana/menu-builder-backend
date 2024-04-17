import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserInterface } from "src/models/user/user.schema";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('findall')
    findall() {
      return this.userService.findAll();
    }

    @Post('create')
    createUser(@Body() user: UserInterface){
        return this.userService.create(user);
    }
    
}