import { Test, TestingModule } from '@nestjs/testing';
import { InstructorsResolver } from './instructors.resolver';

describe('InstructorsResolver', () => {
  let resolver: InstructorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructorsResolver],
    }).compile();

    resolver = module.get<InstructorsResolver>(InstructorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
