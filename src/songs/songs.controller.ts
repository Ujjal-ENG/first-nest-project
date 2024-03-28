import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'All the Songs';
  }
}
