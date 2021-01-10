import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrickController } from './trick.controller';
import { TrickService } from './trick.service';
import { EssentialService } from 'src/essential/essential.service';
import { Trick, TrickSchema } from './trick.model';

@Module({
  controllers: [TrickController],
  providers: [TrickService, EssentialService],
  imports: [
    MongooseModule.forFeature([{ name: Trick.name, schema: TrickSchema }]),
  ]
})
export class TrickModule {}
