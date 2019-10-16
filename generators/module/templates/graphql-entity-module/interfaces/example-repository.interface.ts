import { I<%= kebabToPascal(config.name) %> } from './<%= config.name %>.interface';
import { <%= kebabToPascal(config.name) %>Input } from '../dto/input-<%= config.name %>.input';
import { IPaginate } from '../../../common/pagination/paginate.interface';
import { IOrderByInput } from '../../../common/order/order-by.input.interface';

export interface I<%= kebabToPascal(config.name) %>Repository {
  create(create<%= kebabToPascal(config.name) %>Dto: <%= kebabToPascal(config.name) %>Input): Promise<I<%= kebabToPascal(config.name) %>>;
  getByID(id: string): Promise<I<%= kebabToPascal(config.name) %>>;
  getAll(paginate?: IPaginate, orderBy?: IOrderByInput[]): Promise<I<%= kebabToPascal(config.name) %>[]>;
  delete(id: string): Promise<I<%= kebabToPascal(config.name) %>>;
  update(id: string, data: I<%= kebabToPascal(config.name) %>): Promise<I<%= kebabToPascal(config.name) %>>;
}
