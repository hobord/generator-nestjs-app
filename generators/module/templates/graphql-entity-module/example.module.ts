import { Module } from '@nestjs/common';
import { <%= kebabToPascal(config.name) %>Resolver } from './<%= config.name %>.resolver';
import { <%= kebabToPascal(config.name) %>Service } from './<%= config.name %>.service';
import { <%= kebabToPascal(config.name) %>Repository } from './model/<%= config.name %>.repository';
import { <%= kebabToPascal(config.name) %>ModelFactory } from './model/<%= config.name %>-model.factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= kebabToPascal(config.name) %>Model } from './model/<%= config.name %>.entity';
import { ScalarsModule } from '../common/scalars/scalars.module';
// import { AuthModule } from '../auth/auth.module';
// import { RoleService } from '../auth/role.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([<%= kebabToPascal(config.name) %>Model]),
        ScalarsModule,
        // AuthModule,
    ],
    providers: [<%= kebabToPascal(config.name) %>ModelFactory, <%= kebabToPascal(config.name) %>Repository, <%= kebabToPascal(config.name) %>Resolver, <%= kebabToPascal(config.name) %>Service],
})
export class <%= kebabToPascal(config.name) %>Module {
    // constructor(private roleSerice: RoleService) {
    //     this.roleSerice.addRole({ name: 'example', description: 'Example Role' });
    // }
}
