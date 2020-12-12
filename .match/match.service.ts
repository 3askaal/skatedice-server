import { Injectable } from '@nestjs/common';
import { MatchModel } from './match.model';
import { IMatch, IMatchDoc } from './match';

@Injectable()
export class MatchService {
  async getAll(): Promise<IMatch[]> {
    return MatchModel.find();
  }

  async create(payload: IMatch[]): Promise<IMatchDoc[]> {
    return MatchModel.create(payload);
  }

  async delete(id: string): Promise<any> {
    return MatchModel.findByIdAndRemove(id);
  }

  async deleteAll(): Promise<any> {
    return MatchModel.deleteMany({});
  }
}
