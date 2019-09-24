import { <%= kebabToPascal(config.name) %>Model } from './<%= config.name %>.entity';
import { Injectable } from '@nestjs/common';
import { I<%= kebabToPascal(config.name) %> } from '../interfaces/<%= config.name %>.interface';

@Injectable()
export class <%= kebabToPascal(config.name) %>ModelFactory {
  create(data ?: Partial < I<%= kebabToPascal(config.name) %>>): I<%= kebabToPascal(config.name) %> {
    const now =  new Date();
    const createData = {
      ...data,
      creationDate: now,
      updateDate: now,
    };
    const model = new <%= kebabToPascal(config.name) %>Model();
    return Object.assign(model, createData);
  }
}
