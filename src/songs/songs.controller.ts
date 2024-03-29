/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Connection } from 'src/constants/connection';
import { CreateSongDTO } from './dto/createSongDTO';
import { SongsService } from './songs.service';
@Controller('songs')
export class SongsController {
  constructor(
    private SongsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `This is the connection string ${this.connection.CONNECTIONS_STRING}`,
    );
  }

  @Post()
  create(@Body() CreateSongDTO: CreateSongDTO) {
    return this.SongsService.create(CreateSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.SongsService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetch the song based on the ${typeof id}`;
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
