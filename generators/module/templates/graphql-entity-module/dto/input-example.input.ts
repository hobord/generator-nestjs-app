import { InputType, Field } from 'type-graphql';

@InputType()
export class <%= kebabToPascal(config.name) %>Input {
    @Field()
    readonly title: string;
}
