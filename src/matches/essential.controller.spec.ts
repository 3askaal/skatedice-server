import { Test, TestingModule } from '@nestjs/testing';
import { EssentialController } from './essential.controller';

describe('Essential Controller', () => {
  let controller: EssentialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EssentialController],
    }).compile();

    controller = module.get<EssentialController>(EssentialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
