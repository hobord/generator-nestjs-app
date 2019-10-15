import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginate } from '../../../common/pagination/paginate.interface';
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

  async findOne(id: string): Promise<I<%= kebabToPascal(config.name) %>> {
    const model = await this.repository.findOne(id);
    return model;
  }
  async findAll(paginate ?: IPaginate): Promise<I<%= kebabToPascal(config.name) %>[]> {
    const pager = {
      take: paginate.limit || 30,
      skip: paginate.offset || 0,
    };

    const order = {
      order: { updateDate: 'DESC' },
    };

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
  async update(id: string, data: I<%= kebabToPascal(config.name) %>): Promise<I<%= kebabToPascal(config.name) %>> {
    const updateData = {
      ...data,
      updateAt: new Date(),
    };
    let model = await this.repository.findOne(id);
    model = Object.assign(model, updateData);
    return this.repository.save(model);
  }
}
