import { Test, TestingModule } from '@nestjs/testing';
import { AirbusService } from './airbus.service';

describe('AirbusService', () => {
  let service: AirbusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirbusService],
    }).compile();

    service = module.get<AirbusService>(AirbusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
