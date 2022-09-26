import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World it is interesting! need to create more here, I don\'nt know why I am doing this';

  }
}
