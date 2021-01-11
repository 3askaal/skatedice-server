import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Essential, EssentialDocument } from './essential.model';
import { Trick, TrickDocument } from 'src/trick/trick.model';
import { createTrickDoc } from 'src/trick/trick.helpers';
import { Model } from 'mongoose';
import { DIRECTIONS, POSITIONS, ROTATIONS } from 'src/trick/trick.constants';

@Injectable()
export class EssentialService {
  constructor(
    @InjectModel(Essential.name) private essentialModel: Model<EssentialDocument>,
    @InjectModel(Trick.name) private trickModel: Model<TrickDocument>,
  ) {}

  async getAll(): Promise<Essential[]> {
    return this.essentialModel.find();
  }

  async create(payload: Essential[]): Promise<Essential[]> {
    const essentials: any = await this.essentialModel.create(payload);

    essentials.forEach((essential: EssentialDocument) => {
      POSITIONS.forEach(position => {
        ROTATIONS.forEach(async rotation => {
          if (rotation) {
            DIRECTIONS.forEach(async direction => {
              await this.trickModel.create(createTrickDoc(essential, position, rotation, direction));
            });
          } else {
            await this.trickModel.create(createTrickDoc(essential, position));
          }
        });
      });
    });

    return essentials;
  }

  async delete(id: string): Promise<void> {
    await this.essentialModel.findByIdAndRemove(id);
    await this.trickModel.find({ essential: id }).remove();
  }

  async deleteAll(): Promise<void> {
    await this.essentialModel.deleteMany({});
    await this.trickModel.deleteMany({});
  }
}
