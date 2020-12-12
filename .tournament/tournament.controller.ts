import { Controller, Get, Body, Post } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { ITournament, ITournamentDoc } from './tournament';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get()
  async getAll(): Promise<ITournament[]> {
    try {
      return this.tournamentService.getAll();
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async create(@Body() payload: ITournament[]): Promise<ITournamentDoc[]> {
    try {
      return this.tournamentService.create(payload);
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async delete(@Body() id: string): Promise<ITournamentDoc[]> {
    try {
      return this.tournamentService.delete(id);
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async deleteAll(): Promise<ITournamentDoc[]> {
    try {
      return this.tournamentService.deleteAll();
    } catch (err) {
      throw err;
    }
  }
}
