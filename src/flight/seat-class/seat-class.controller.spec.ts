import { Test, TestingModule } from '@nestjs/testing';
import { SeatClassController } from './seat-class.controller';

describe('SeatClassController', () => {
  let controller: SeatClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeatClassController],
    }).compile();

    controller = module.get<SeatClassController>(SeatClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
