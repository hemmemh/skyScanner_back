import { Test, TestingModule } from '@nestjs/testing';
import { SeatClassService } from './seat-class.service';

describe('SeatClassService', () => {
  let service: SeatClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeatClassService],
    }).compile();

    service = module.get<SeatClassService>(SeatClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
