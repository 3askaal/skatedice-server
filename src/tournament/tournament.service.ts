import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tournament, TournamentDocument } from './tournament.model';
import { Model } from 'mongoose';

@Injectable()
export class TournamentService {
  constructor(
    @InjectModel(Tournament.name) private tournamentModel: Model<TournamentDocument>,
  ) {}

  async getAll(): Promise<Tournament[]> {
    const tournaments: any = await this.tournamentModel.find({ twisted: false })
      // .populate({
      //   path: 'essential',
      //   select: 'name rotation direction',
      //   options: { lean: true },
      // })
      // .sort('difficulty')
      .lean();

    return tournaments
  }
}
