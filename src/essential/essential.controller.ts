import { Controller, Get, Body, Post } from '@nestjs/common';
import { EssentialService } from './essential.service';
import { IEssential, IEssentialDoc } from './essential';

@Controller('essentials')
export class EssentialController {
  constructor(private readonly essentialService: EssentialService) {}

  @Get()
  async getAll(): Promise<IEssential[]> {
    try {
      return this.essentialService.getAll();
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async create(@Body() payload: IEssential[]): Promise<IEssentialDoc[]> {
    try {
      return this.essentialService.create(payload);
    } catch (err) {
      throw err;
    }
  }
}
