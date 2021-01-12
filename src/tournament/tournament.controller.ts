import { Controller, Get, Query } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { Tournament } from './tournament.model';

@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get()
  getAll(@Query() {}: any): Promise<Tournament[]> {
    try {
      return this.tournamentService.getAll();
    } catch (err) {
      throw err;
    }
  }
}
