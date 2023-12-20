import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInstructorInput } from 'src/instructors/dto/create-instructor.input';
import { Instructor } from 'src/instructors/instructor.entity';

@Injectable()
export class InstructorsService {
  constructor(
    @InjectModel('Instructor')
    private instructorModel: Model<Instructor>,
  ) {}

  async findAll(): Promise<Instructor[]> {
    return this.instructorModel.find().exec();
  }

  async findOne(id: string): Promise<Instructor> {
    return await this.instructorModel.findById(id);
  }

  async createInstructor(
    instructor: CreateInstructorInput,
  ): Promise<Instructor> {
    const newInstructor = await this.instructorModel.create(instructor);

    return newInstructor.save();
  }
}
