import { Test, TestingModule } from '@nestjs/testing';
import { AirbusController } from './airbus.controller';

describe('AirbusController', () => {
  let controller: AirbusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirbusController],
    }).compile();

    controller = module.get<AirbusController>(AirbusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
