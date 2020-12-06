import { Test, TestingModule } from '@nestjs/testing';
import { TournamentController } from './tournament.controller';

describe('Tournament Controller', () => {
  let controller: TournamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TournamentController],
    }).compile();

    controller = module.get<TournamentController>(TournamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
