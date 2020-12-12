import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { TrickService } from 'src/trick/trick.service';

@Module({
  controllers: [MatchController],
  providers: [MatchService, TrickService],
})
export class MatchModule {}
