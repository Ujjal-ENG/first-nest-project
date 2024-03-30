import { Injectable } from '@nestjs/common';
import { DevConfigService } from '../src/common/providers/DevConfigService';
@Injectable()
export class AppService {
  constructor(private devConfigService: DevConfigService) {}
  getHello(): string {
    return 'Hello Ujjal, whats the  World!';
  }
}
