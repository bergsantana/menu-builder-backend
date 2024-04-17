import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { UserSchema, UserInterface } from "src/models/user/user.schema";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<UserInterface>
    ){}

    async create(user: UserInterface){
        const createdUser = new this.userModel(user)
        return createdUser.save()
    }

    async findAll(){
        return this.userModel.find().exec()
    }
}