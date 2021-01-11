import { Controller, Get, Query } from '@nestjs/common';
import { TrickService } from './trick.service';
import { Trick } from './trick.model';

@Controller('tricks')
export class TrickController {
  constructor(private readonly trickService: TrickService) {}

  @Get()
  getAll(@Query() {}: any): Promise<Trick[]> {
    try {
      return this.trickService.getAll();
    } catch (err) {
      throw err;
    }
  }
}
