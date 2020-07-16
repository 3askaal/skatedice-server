import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EssentialModule } from 'src/essential/essential.module';
import { TrickModule } from 'src/trick/trick.module';
import { EssentialService } from 'src/essential/essential.service';
import { TrickService } from 'src/trick/trick.service';
import { ESSENTIALS } from 'src/essential/essential.constants';
import { EssentialModel } from 'src/essential/essential.model';
import { TrickModel } from 'src/trick/trick.model';
import { RequestService } from 'src/requests/request.service';
import { RequestModule } from 'src/requests/request.module';

@Module({
  imports: [EssentialModule, TrickModule, RequestModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, EssentialService, TrickService, RequestService],
})
export class AppModule {
  constructor(private readonly essentialService: EssentialService) {
    this.setupDatabase();
  }

  async setupDatabase(): Promise<void> {
    await this.essentialService.deleteAll();
    await this.essentialService.create(ESSENTIALS);

    const essentialAmount: number = await EssentialModel.find({}).countDocuments();
    const trickAmount: number = await TrickModel.find({}).countDocuments();
    const twistedTrickAmount: number = await TrickModel.find({}).countDocuments({ twisted: true });

    console.log(
      `${trickAmount} tricks created based on ${essentialAmount} essential tricks, with ${twistedTrickAmount} useless tricks`,
    );
  }
}
