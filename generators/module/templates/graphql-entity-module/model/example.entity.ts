import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { I<%= kebabToPascal(config.name) %> } from '../interfaces/<%= config.name %>.interface';

@Entity({name: '<%= config.name %>'})
export class <%= kebabToPascal(config.name) %>Model implements I<%= kebabToPascal(config.name) %> {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  readonly title: string;

  @Column()
  readonly createAt: Date;

  @Column()
  readonly updateAt: Date;
}
