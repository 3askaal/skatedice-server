import { Module } from '@nestjs/common';
import { EssentialController } from './essential.controller';
import { EssentialService } from './essential.service';
import { TrickService } from 'src/trick/trick.service';

@Module({
  controllers: [EssentialController],
  providers: [EssentialService, TrickService],
})
export class EssentialModule {}
