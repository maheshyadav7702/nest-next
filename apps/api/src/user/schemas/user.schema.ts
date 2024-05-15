import * as mongoose from 'mongoose'

export const UserSchema:any = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    address:String,
    description:String,
    created_at:{type:Date, default:Date.now}
})

