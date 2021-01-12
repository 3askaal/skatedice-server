import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { EssentialService } from 'src/essential/essential.service';
import { Match, MatchSchema } from './match.model';
import { Essential, EssentialSchema } from 'src/essential/essential.model';

@Module({
  controllers: [MatchController],
  providers: [MatchService, EssentialService],
  imports: [
    MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }]),
    MongooseModule.forFeature([{ name: Essential.name, schema: EssentialSchema }]),
  ]
})
export class MatchModule {}
