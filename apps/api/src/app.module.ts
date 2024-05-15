import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'

import { UserModule } from './user/user.module';
import { SongsModule } from './songs/songs.module';
import { AlbumModule } from './album/album.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest-next'), SongsModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
