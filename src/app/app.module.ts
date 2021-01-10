import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EssentialModule } from 'src/essential/essential.module';
import { TrickModule } from 'src/trick/trick.module';
import { EssentialService } from 'src/essential/essential.service';
import { TrickService } from 'src/trick/trick.service';
import { ESSENTIALS } from 'src/essential/essential.constants';
import { Essential, EssentialDocument } from 'src/essential/essential.model';
import { Trick, TrickDocument } from 'src/trick/trick.model';
import { RequestService } from 'src/requests/request.service';
import { RequestModule } from 'src/requests/request.module';
import { Model } from 'mongoose';

@Module({
  imports: [
    EssentialModule,
    TrickModule,
    RequestModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, EssentialService, TrickService, RequestService],
})
export class AppModule {
  constructor(
    private readonly essentialService: EssentialService,
    @InjectModel(Trick.name) private trickModel: Model<TrickDocument>,
    @InjectModel(Essential.name) private essentialModel: Model<EssentialDocument>,
  ) {
    this.setupDatabase();
  }

  async setupDatabase(): Promise<void> {
    await this.essentialService.deleteAll();
    await this.essentialService.create(ESSENTIALS);
    // await this.matchService.create(genMatches());

    const essentialAmount: number = await this.essentialModel.find({}).countDocuments();
    const trickAmount: number = await this.trickModel.find({}).countDocuments();
    const twistedTrickAmount: number = await this.trickModel.find({}).countDocuments({ twisted: true });

    console.log(
      `${trickAmount} tricks created based on ${essentialAmount} essential tricks, with ${twistedTrickAmount} useless tricks`,
    );
  }
}
