import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstructorsModule } from './instructors/instructors.module';
import { LessonsModule } from './lessons/lessons.module';
import { StudentsModule } from './students/students.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

const dbUrl = `mongodb+srv://ted1:${encodeURIComponent(
  'ted1',
)}@cluster0.jcqszyq.mongodb.net/?retryWrites=true&w=majority`;

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      synchronize: true,
      database: ':memory:',
      entities: ['dist/**/*/.entity{.ts,.js}'],
    }),
    MongooseModule.forRoot(dbUrl),
    InstructorsModule,
    LessonsModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
