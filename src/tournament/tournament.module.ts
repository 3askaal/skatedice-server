import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';
import { EssentialService } from 'src/essential/essential.service';
import { Tournament, TournamentSchema } from './tournament.model';
import { Essential, EssentialSchema } from 'src/essential/essential.model';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService, EssentialService],
  imports: [
    MongooseModule.forFeature([{ name: Tournament.name, schema: TournamentSchema }]),
    MongooseModule.forFeature([{ name: Essential.name, schema: EssentialSchema }]),
  ]
})
export class TournamentModule {}
