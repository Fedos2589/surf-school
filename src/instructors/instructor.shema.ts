import mongoose from 'mongoose';

export const InstructorScheme = new mongoose.Schema({
  name: String,
  experience: Number,
});
