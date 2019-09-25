import { Injectable, Inject } from '@nestjs/common';
import { I<%= kebabToPascal(config.name) %> } from './interfaces/<%= config.name %>.interface';
import { <%= kebabToPascal(config.name) %>Input } from './dto/input-<%= config.name %>.input';
import { <%= kebabToPascal(config.name) %>Repository } from './model/<%= config.name %>.repository';
import { I<%= kebabToPascal(config.name) %>Repository } from './interfaces/<%= config.name %>-repository.interface';

@Injectable()
export class <%= kebabToPascal(config.name) %>Service {
    constructor(
        @Inject(<%= kebabToPascal(config.name) %>Repository) private readonly repository: I<%= kebabToPascal(config.name) %>Repository,
    ) {}

    async create(create<%= kebabToPascal(config.name) %>Dto: <%= kebabToPascal(config.name) %>Input): Promise<I<%= kebabToPascal(config.name) %>> {
        return await this.repository.create(create<%= kebabToPascal(config.name) %>Dto);
    }

    async findAll(): Promise<I<%= kebabToPascal(config.name) %>[]> {
        return await this.repository.findAll();
    }

    async findOne(id: string): Promise<I<%= kebabToPascal(config.name) %>> {
        return await this.repository.findOne(id);
    }

    async delete(id: string) {
        return await this.repository.delete(id);
    }

    async update(id: string, <%= config.name %>Input: <%= kebabToPascal(config.name) %>Input): Promise<I<%= kebabToPascal(config.name) %>> {
        return await this.repository.update(id, <%= config.name %>Input);
    }
}
