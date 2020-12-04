import { Test, TestingModule } from '@nestjs/testing';
import { EssentialService } from './essential.service';

describe('EssentialService', () => {
  let service: EssentialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EssentialService],
    }).compile();

    service = module.get<EssentialService>(EssentialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
