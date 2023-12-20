import { InstructorsService } from 'src/instructors/instructors.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Instructor } from 'src/instructors/instructor.entity';
import { CreateInstructorInput } from 'src/instructors/dto/create-instructor.input';

@Resolver((of) => Instructor)
export class InstructorsResolver {
  constructor(private instructorService: InstructorsService) {}

  @Query((returns) => [Instructor])
  instructors(): Promise<Instructor[]> {
    return this.instructorService.findAll();
  }

  @Query((returns) => Instructor)
  getInstructor(@Args('id') id: string): Promise<Instructor> {
    return this.instructorService.findOne(id);
  }

  @Mutation((returns) => Instructor)
  createInstructor(
    @Args('instructor') instructor: CreateInstructorInput,
  ): Promise<Instructor> {
    return this.instructorService.createInstructor(instructor);
  }
}
