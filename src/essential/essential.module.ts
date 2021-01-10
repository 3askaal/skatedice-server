import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EssentialController } from './essential.controller';
import { EssentialService } from './essential.service';
import { TrickService } from 'src/trick/trick.service';
import { Essential, EssentialSchema } from './essential.model';

@Module({
  controllers: [EssentialController],
  providers: [EssentialService, TrickService],
  imports: [
    MongooseModule.forFeature([{ name: Essential.name, schema: EssentialSchema }]),
  ]
})
export class EssentialModule {}
