import { Injectable } from '@nestjs/common';
import { map } from 'lodash';
import { TrickModel } from './trick.model';
import { ITrick } from './trick';
import { formatTrick } from './trick.helpers';

@Injectable()
export class TrickService {
  async getAll(): Promise<ITrick[]> {
    const tricks: any = await TrickModel.find({ twisted: false })
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
