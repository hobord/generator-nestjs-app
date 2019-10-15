import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { <%= kebabToPascal(config.name) %>Service } from './<%= config.name %>.service';
import { <%= kebabToPascal(config.name) %> } from './dto/<%= config.name %>.dto';
import { <%= kebabToPascal(config.name) %>Input } from './dto/input-<%= config.name %>.input';

@Resolver(of => <%= kebabToPascal(config.name) %>)
export class <%= kebabToPascal(config.name) %>Resolver {
  constructor(
    private readonly <%= config.name %>Service: <%= kebabToPascal(config.name) %>Service,
  ) {}

  @Query(() => [<%= kebabToPascal(config.name) %>], {nullable: true})
  async <%= config.name %>s(): Promise<<%= kebabToPascal(config.name) %>[]> {
    return this.<%= config.name %>Service.findAll();
  }

  @Query(() => <%= kebabToPascal(config.name) %>, {nullable: true})
  async <%= config.name %>(@Args('id') id: string): Promise<<%= kebabToPascal(config.name) %>> {
    return this.<%= config.name %>Service.findOne(id);
  }

  @Mutation(() => <%= kebabToPascal(config.name) %>)
  async create<%= kebabToPascal(config.name) %>(@Args('input') input: <%= kebabToPascal(config.name) %>Input): Promise<<%= kebabToPascal(config.name) %>> {
    return this.<%= config.name %>Service.create(input);
  }

  @Mutation(() => <%= kebabToPascal(config.name) %>)
  async update<%= kebabToPascal(config.name) %>(@Args('id') id: string, @Args('input') input: <%= kebabToPascal(config.name) %>Input): Promise<<%= kebabToPascal(config.name) %>> {
    return this.<%= config.name %>Service.update(id, input);
  }

  @Mutation(() => <%= kebabToPascal(config.name) %>)
  async delete<%= kebabToPascal(config.name) %>(@Args('id') id: string): Promise<<%= kebabToPascal(config.name) %>> {
    return this.<%= config.name %>Service.delete(id);
  }
}
