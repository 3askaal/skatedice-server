import { Controller, Get, Query } from '@nestjs/common';
import { MatchService } from './match.service';
import { Match } from './match.model';

@Controller('matchs')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  getAll(@Query() {}: any): Promise<Match[]> {
    try {
      return this.matchService.getAll();
    } catch (err) {
      throw err;
    }
  }
}
