import { Injectable } from '@nestjs/common';
import { TournamentModel } from './tournament.model';
import { ITournament, ITournamentDoc } from './tournament';

@Injectable()
export class TournamentService {
  async getAll(): Promise<ITournament[]> {
    return TournamentModel.find();
  }

  async create(payload: ITournament[]): Promise<ITournamentDoc[]> {
    return TournamentModel.create(payload);
  }

  async delete(id: string): Promise<any> {
    return TournamentModel.findByIdAndRemove(id);
  }

  async deleteAll(): Promise<any> {
    return TournamentModel.deleteMany({});
  }
}
