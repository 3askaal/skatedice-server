import { Injectable } from '@nestjs/common';
import { EssentialModel } from './essential.model';
import { TrickService } from 'src/trick/trick.service';
import { TrickModel } from 'src/trick/trick.model';
import { IEssential, IEssentialDoc } from './essential';
import { createTricksBasedOnEssential } from 'src/trick/trick.helpers';

@Injectable()
export class EssentialService {
  constructor(private readonly trickService: TrickService) {}

  async getAll(): Promise<IEssential[]> {
    return EssentialModel.find();
  }

  async create(payload: IEssential[]): Promise<IEssentialDoc[]> {
    const essentials: any = await EssentialModel.create(payload);

    essentials.forEach((item: IEssentialDoc) => {
      createTricksBasedOnEssential(item);
    });

    return essentials;
  }

  async delete(id: string) {
    await EssentialModel.findByIdAndRemove(id);
    await TrickModel.find({ essential: id }).remove();
  }

  async deleteAll() {
    await EssentialModel.deleteMany({});
    await TrickModel.deleteMany({});
  }
}
