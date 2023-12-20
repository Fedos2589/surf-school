import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Instructor {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  experience?: number;
}
