import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Match, MatchDocument } from './match.model';
import { Model } from 'mongoose';

@Injectable()
export class MatchService {
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>,
  ) {}

  async getAll(): Promise<Match[]> {
    const matches: any = await this.matchModel.find({ twisted: false })
      // .populate({
      //   path: 'essential',
      //   select: 'name rotation direction',
      //   options: { lean: true },
      // })
      // .sort('difficulty')
      .lean();

    return matches
  }
}
