import { I<%= kebabToPascal(config.name) %> } from './<%= config.name %>.interface';
import { <%= kebabToPascal(config.name) %>Input } from '../dto/input-<%= config.name %>.input';

export interface I<%= kebabToPascal(config.name) %>Repository {
  create(create<%= kebabToPascal(config.name) %>Dto: <%= kebabToPascal(config.name) %>Input): Promise<I<%= kebabToPascal(config.name) %>>;
  findOne(id: string): Promise<I<%= kebabToPascal(config.name) %>>;
  findAll(): Promise<I<%= kebabToPascal(config.name) %>[]>;
  delete(id: string): Promise<I<%= kebabToPascal(config.name) %>>;
  update(id: string, data: I<%= kebabToPascal(config.name) %>): Promise<I<%= kebabToPascal(config.name) %>>;
}
