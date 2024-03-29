import { Controller, Delete, Get, Param, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'All the Songs';
  }

  @Get(':id')
  findOne(@Param() params: any) {
    return `only one song can shown and the song id is ${params.id}`;
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
