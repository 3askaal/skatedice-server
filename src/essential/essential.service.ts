import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Essential, EssentialDocument } from './essential.model';
import { Trick, TrickDocument } from 'src/trick/trick.model';
import { IEssential, IEssentialDoc } from './essential';
import { createTricksBasedOnEssential } from 'src/trick/trick.helpers';
import { Model } from 'mongoose';

@Injectable()
export class EssentialService {
  constructor(
    @InjectModel(Essential.name) private essentialModel: Model<EssentialDocument>,
    @InjectModel(Trick.name) private trickModel: Model<TrickDocument>,
  ) {}

  async getAll(): Promise<IEssential[]> {
    return this.essentialModel.find();
  }

  async create(payload: IEssential[]): Promise<IEssentialDoc[]> {
    const essentials: any = await this.essentialModel.create(payload);

    essentials.forEach((item: IEssentialDoc) => {
      createTricksBasedOnEssential(item);
    });

    return essentials;
  }

  async delete(id: string) {
    await this.essentialModel.findByIdAndRemove(id);
    await this.trickModel.find({ essential: id }).remove();
  }

  async deleteAll() {
    await this.essentialModel.deleteMany({});
    await this.trickModel.deleteMany({});
  }
}
