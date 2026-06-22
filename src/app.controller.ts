import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getHello(): Promise<any> {
    const response = {
      status: 'success',
      message: 'Hello World!',
      data:[]
    };
    return response;
  }
}
