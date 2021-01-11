import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EssentialController } from './essential.controller';
import { EssentialService } from './essential.service';
import { TrickService } from 'src/trick/trick.service';
import { Essential, EssentialSchema } from './essential.model';
import { Trick, TrickSchema } from 'src/trick/trick.model';

@Module({
  controllers: [EssentialController],
  providers: [EssentialService, TrickService],
  imports: [
    MongooseModule.forFeature([{ name: Essential.name, schema: EssentialSchema }]),
    MongooseModule.forFeature([{ name: Trick.name, schema: TrickSchema }]),
  ]
})
export class EssentialModule {}
