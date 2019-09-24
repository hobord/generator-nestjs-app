import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { I<%= kebabToPascal(config.name) %> } from '../interfaces/<%= config.name %>.interface';

@Entity({name: '<%= config.name %>'})
export class <%= kebabToPascal(config.name) %>Model implements I<%= kebabToPascal(config.name) %> {
  @ObjectIdColumn()
  id?: string;

  @Column()
  readonly title: string;

  @Column()
  readonly creationDate: Date;

  @Column()
  readonly updateDate: Date;
}
