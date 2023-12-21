import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNow(): number {
    return Date.now();
  }
}
