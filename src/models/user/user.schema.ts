import * as mongoose from 'mongoose'

export interface UserInterface {
    firstName: string,
    lastName: string,
    birthDate: string,
    email: string,
    password: string,
}

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: String,
    email: String,
    password: String,
})