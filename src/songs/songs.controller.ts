/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDTO } from './dto/createSongDTO';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}

  @Post()
  create(@Body() CreateSongDTO: CreateSongDTO) {
    return this.SongsService.create(CreateSongDTO);
  }

  @Get()
  findAll() {
    return this.SongsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: any) {
    return this.SongsService.findOne(params.id);
  }
  @Put(':id')
  updateOne() {
    return 'Only one song can update';
  }
  @Delete(':id')
  delete() {
    return 'Only one song can delete';
  }
}
