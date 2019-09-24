import { ObjectType, Field, ID } from 'type-graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@ObjectType()
export class Example {
  @Field(() => ID)
  @IsString()
  readonly id?: string;

  @Field({ nullable: true })
  @IsString()
  // @IsNotEmpty()
  readonly title?: string;

  @Field({ nullable: true })
  creationDate?: Date;

  @Field({ nullable: true })
  updateDate?: Date;
}
