import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { UserSchema } from './schemas/user.schema';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'Users', schema: UserSchema}])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
