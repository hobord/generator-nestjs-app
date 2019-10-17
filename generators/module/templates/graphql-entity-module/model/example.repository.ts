import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginate } from '../../../common/pagination/paginate.interface';
import { IOrderByInput } from '../../../common/order/order-by.input.interface';
import { I<%= kebabToPascal(config.name) %>Repository } from '../interfaces/<%= config.name %>-repository.interface';
import { I<%= kebabToPascal(config.name) %> } from '../interfaces/<%= config.name %>.interface';
import { <%= kebabToPascal(config.name) %>Input } from '../dto/input-<%= config.name %>.input';
import { <%= kebabToPascal(config.name) %>Model } from './<%= config.name %>.entity';
import { <%= kebabToPascal(config.name) %>ModelFactory } from './<%= config.name %>-model.factory';


@Injectable()
export class <%= kebabToPascal(config.name) %>Repository implements I<%= kebabToPascal(config.name) %>Repository {
  constructor(
      @InjectRepository(<%= kebabToPascal(config.name) %>Model)
      private readonly repository: Repository<<%= kebabToPascal(config.name) %>Model>,
      private readonly modelFactory: <%= kebabToPascal(config.name) %>ModelFactory,
      ) {
  }
  async create(create<%= kebabToPascal(config.name) %>Dto: <%= kebabToPascal(config.name) %>Input): Promise<I<%= kebabToPascal(config.name) %>> {
    const model = this.modelFactory.create(create<%= kebabToPascal(config.name) %>Dto);
    return this.repository.save(model);
  }

  async getByID(id: string): Promise<I<%= kebabToPascal(config.name) %>> {
    const model = await this.repository.findOne(id);
    return model;
  }
  async getAll(paginate?: IPaginate, orderBy?: IOrderByInput[]): Promise<I<%= kebabToPascal(config.name) %>[]> {
    const pager = {
      take: paginate && paginate.limit ? paginate.limit : 30,
      skip: paginate && paginate.offset ? paginate.offset : 0,
    };

    let order = { order: {}};
    if (orderBy) {
      order.order = {};
      for (const orderItem of orderBy) {
        order.order[orderItem.column] = orderItem.desc ? 'DESC' : 'ASC';
      }
    } else {
      order = {
        order: { name: 'ASC' },
      };
    }

    const models = await this.repository.find({
      where: {
        ...order,
      },
      ...pager,
    });

    return models;
  }
  async delete(id: string): Promise<I<%= kebabToPascal(config.name) %>> {
    const model = await this.repository.findOne(id);
    this.repository.delete(model);
    return model;
  }
  async update(<%= kebabToPascal(config.name) %>Id: string, exampleData: I<%= kebabToPascal(config.name) %>): Promise<I<%= kebabToPascal(config.name) %>> {
    const { id, ...data } = <%= kebabToPascal(config.name) %>Data;
    const updateData = {
      ...data,
      updateAt: new Date(),
    };
    let model = await this.repository.findOne(<%= kebabToPascal(config.name) %>Id);
    model = Object.assign(model, updateData);
    return this.repository.save(model);
  }
}
