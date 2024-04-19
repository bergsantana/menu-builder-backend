import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Model, Mongoose, MongooseError, mongo } from "mongoose";
import { UserSchema, UserInterface } from "src/models/user/user.schema";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<UserInterface>
    ){}

    async create(user: UserInterface){
        const createdUser = new this.userModel(user)
        const saltSauce = 10
        const hash = await bcrypt.hash(user.password, saltSauce)
        createdUser.password = hash
        
        try{
            return await createdUser.save()
        }catch(e){
            return e
        }

    }

    async findAll(){
        return await this.userModel.find().exec()
    }

    async findOne(email: string){
        const found = await this.userModel.findOne({email: email}).exec()
        return found
    }

 
}