import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
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
import { MatchService } from 'src/match/match.service';
import { TournamentService } from 'src/tournament/tournament.service';

@Module({
  imports: [
    EssentialModule,
    TrickModule,
    RequestModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService, EssentialService, TrickService, RequestService],
})
export class AppModule {
  constructor(
    private readonly essentialService: EssentialService,
    private readonly matchService: MatchService,
    private readonly tournamentService: TournamentService,
  ) {
    this.setupDatabase();
  }

  async setupDatabase(): Promise<void> {
    await this.essentialService.deleteAll();
    await this.essentialService.create(ESSENTIALS);
    await this.matchService.create(genMatches());

    const essentialAmount: number = await EssentialModel.find({}).countDocuments();
    const trickAmount: number = await TrickModel.find({}).countDocuments();
    const twistedTrickAmount: number = await TrickModel.find({}).countDocuments({ twisted: true });

    console.log(
      `${trickAmount} tricks created based on ${essentialAmount} essential tricks, with ${twistedTrickAmount} useless tricks`,
    );
  }
}
