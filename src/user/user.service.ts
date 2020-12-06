import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { IUser, IUserDoc } from './user';

@Injectable()
export class UserService {
  async getAll(): Promise<IUser[]> {
    return UserModel.find();
  }

  async create(payload: IUser[]): Promise<IUserDoc[]> {
    return UserModel.create(payload);
  }

  async delete(id: string): Promise<any> {
    return UserModel.findByIdAndRemove(id);
  }

  async deleteAll(): Promise<any> {
    return UserModel.deleteMany({});
  }
}
