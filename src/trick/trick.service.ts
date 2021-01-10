import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { map } from 'lodash';
import { Trick, TrickDocument } from './trick.model';
import { ITrick } from './trick';
import { formatTrick } from './trick.helpers';
import { Model } from 'mongoose';

@Injectable()
export class TrickService {
  constructor(
    @InjectModel(Trick.name) private trickModel: Model<TrickDocument>,
  ) {}

  async getAll(): Promise<ITrick[]> {
    const tricks: any = await this.trickModel.find({ twisted: false })
      .populate({
        path: 'essential',
        select: 'name rotation direction',
        options: { lean: true },
      })
      .sort('difficulty')
      .select('position essential rotation direction difficulty')
      .lean();

    return map(tricks, formatTrick);
  }
}
