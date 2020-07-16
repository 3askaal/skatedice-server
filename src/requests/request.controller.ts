import { Controller, Body, Post } from '@nestjs/common';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  sendRequest(@Body() { body: { type, message } }: any): Promise<void> {
    try {
      console.log('type: ', type);
      console.log('message: ', message);
      return this.requestService.sendRequest(type, message);
    } catch (err) {
      throw err;
    }
  }
}
