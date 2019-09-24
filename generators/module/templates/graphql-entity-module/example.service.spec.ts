import { Test, TestingModule } from '@nestjs/testing';
import { <%= kebabToPascal(config.name) %>Service } from './<%= config.name %>.service';

describe('<%= kebabToPascal(config.name) %>Service', () => {
  let service: <%= kebabToPascal(config.name) %>Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [<%= kebabToPascal(config.name) %>Service],
    }).compile();

    service = module.get<<%= kebabToPascal(config.name) %>Service>(<%= kebabToPascal(config.name) %>Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
