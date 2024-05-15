import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAlbumDTO } from './dto/create-album.dto';
import { AlbumService } from './album.service';
import { Album } from './schemas/album.schema';

@Controller('album')
export class AlbumController {

    constructor(private albumService:AlbumService){}


@Post()
create(@Body() createAlbumDTO:CreateAlbumDTO): Promise<Album>{
    return this.albumService.createAlbum(createAlbumDTO)
}

@Get()

find():Promise<Album[]>{
    return this.albumService.findAlbum()
}

}
