import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateInstructorInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  experience?: number;
}
