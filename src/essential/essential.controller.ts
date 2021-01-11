import { Controller, Get, Body, Post } from '@nestjs/common';
import { EssentialService } from './essential.service';
import { Essential } from './essential.model';

@Controller('essentials')
export class EssentialController {
  constructor(private readonly essentialService: EssentialService) {}

  @Get()
  async getAll(): Promise<Essential[]> {
    try {
      return this.essentialService.getAll();
    } catch (err) {
      throw err;
    }
  }

  @Post()
  async create(@Body() payload: Essential[]): Promise<Essential[]> {
    try {
      return this.essentialService.create(payload);
    } catch (err) {
      throw err;
    }
  }
}
