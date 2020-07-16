import { Module } from '@nestjs/common';
import { TrickController } from './trick.controller';
import { TrickService } from './trick.service';
import { EssentialService } from 'src/essential/essential.service';

@Module({
  controllers: [TrickController],
  providers: [TrickService, EssentialService],
})
export class TrickModule {}
