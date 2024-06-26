import * as mongoose from 'mongoose'

export interface UserInterface {
    firstName: string,
    lastName: string,
    birthDate: string,
    email: string,
    password: string,
    phoneNum: string,
    paymentKey: string
     
}

export const UserSchema = new mongoose.Schema({
    firstName:  {type: String, required: true},
    lastName:  {type: String, required: true},
    birthDate:  {type: String, required: true},
    email:  {type: String, required: true, unique: true},
    password:  {type: String, required: true},
    phoneNum: { type: String, required: true, unique : true},
    paymentKey: { type: String, required: true, unique: true},
     
})

type User = mongoose.InferSchemaType<typeof UserSchema>;


export default mongoose.model<User>("User", UserSchema)    
 