import {Document} from 'mongoose'

export interface User extends Document{
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    address:String,
    description:String,
    created_at:Date
}