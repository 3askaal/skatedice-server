import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async getAll(): Promise<User[]> {
    const users: any = await this.userModel.find({ twisted: false })
      // .populate({
      //   path: 'essential',
      //   select: 'name rotation direction',
      //   options: { lean: true },
      // })
      // .sort('difficulty')
      .lean();

    return users
  }
}
