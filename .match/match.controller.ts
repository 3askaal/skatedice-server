import { Controller, Get, Body, Post } from '@nestjs/common';
import { MatchService } from './match.service';
import { IMatch, IMatchDoc } from './match';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  async getAll(): Promise<IMatch[]> {
    try {
      return this.matchService.getAll();
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async create(@Body() payload: IMatch[]): Promise<IMatchDoc[]> {
    try {
      return this.matchService.create(payload);
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async delete(@Body() id: string): Promise<IMatchDoc[]> {
    try {
      return this.matchService.delete(id);
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async deleteAll(): Promise<IMatchDoc[]> {
    try {
      return this.matchService.deleteAll();
    } catch (err) {
      throw err;
    }
  }
}
