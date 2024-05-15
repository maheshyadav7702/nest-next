import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../interface/user.interface";
import { CreateUserDto } from "../dto/user.dto";

@Injectable()

export class UserService{
    constructor(@InjectModel('User') private readonly userModel:Model<User>){  }

    //create
    public async createUser(user:CreateUserDto): Promise<User>{
        const data = await new this.userModel(user);
        return data.save()
    }


    //listing
    public async listUsers(): Promise<User []>{
        return await this.userModel.find({})
    }

    //update
    public async updateUser(id:string, userDto:CreateUserDto): Promise<User>{
        const userData = await this.userModel.findByIdAndUpdate(id, userDto, {new:true})
        return userData;
  
    }

    //get single user
    // public async getUser(id:string): Promise<User []>{
    //     const userData = await this.userModel.findById(id).exec();
    //     return userData;
    // }

    //remove user
    public async removeUser(id:string): Promise<User []>{
        return await this.userModel.findByIdAndDelete(id)  
    }
}