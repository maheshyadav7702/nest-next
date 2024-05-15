import { Controller, Get, HttpStatus, Param, Post, Res,Delete, Put, Req, Query, Body } from "@nestjs/common";
import { UserService } from "../services/user.service";
import {Response} from 'express'
import { CreateUserDto } from "../dto/user.dto";


@Controller('Users')

export class UserController{
    constructor(private readonly service:UserService){}

    @Post()
    async createUser(@Res() res:Response, @Body() userparams:CreateUserDto){
        const data = await this.service.createUser(userparams)
        res.status(HttpStatus.OK).json(data)
    }

    @Get()
    //get list
    async getAllListUsers(@Res() res:Response):Promise<any>{
    const data = await this.service.listUsers()
    res.status(HttpStatus.OK).json(data)
    }

    //sigle user
    // @Get('/:userId')
    // async getUserById(@Res() res:Response, @Param('id') id:string):Promise<any>{
    //    const data = await this.service.getUser(id)
    //    res.status(HttpStatus.OK).json(data)
    // }

    //delete user
    // @Delete('/')
    // async deletedByUserId(@Res() res:Response, @Query('id') id:string):Promise<any>{
    //    const data = await this.service.getUser(id)
    //    res.status(HttpStatus.OK).json({
    //     message:"delete the user",
    //     data
    //    })
    // }

    //update the user
    // @Put('/:userId')
    // async updateByUserId(@Res() res:Response, @Req() req:Request, @Query('id') id:string):Promise<any>{
    //    const data = await this.service.updateUser(id, req.body)
    //    res.status(HttpStatus.OK).json(data)
    // }


}

