import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Send Mail Application for AssistancePlus';
  }
}
