import { Controller, Get, Query } from '@nestjs/common';
import { TrickService } from './trick.service';
import { ITrick } from './trick';

@Controller('tricks')
export class TrickController {
  constructor(private readonly trickService: TrickService) {}

  @Get()
  getAll(@Query() {}: any): Promise<ITrick[]> {
    try {
      return this.trickService.getAll();
    } catch (err) {
      throw err;
    }
  }
}
