import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from 'src/instructors/instructor.entity';
import { InstructorScheme } from 'src/instructors/instructor.shema';
import { InstructorsResolver } from './instructors.resolver';
import { InstructorsService } from './instructors.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Instructor]),
    MongooseModule.forFeature([
      {
        name: 'Instructor',
        schema: InstructorScheme,
      },
    ]),
  ],
  providers: [InstructorsService, InstructorsResolver],
})
export class InstructorsModule {}
