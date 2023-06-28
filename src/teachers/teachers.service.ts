import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  private teachers = [
    {
      id: 1,
      nationalId: 123,
      title: 'Mr',
      name: 'Don',
      surname: 'Mike',
      dateOfBirth: '23-20-2000',
      teacherNumber: 1,
      salary: 100,
    },
    {
      id: 2,
      nationalId: 395,
      title: 'Dr',
      name: 'Frank',
      surname: 'Gates',
      dateOfBirth: '05-12-1990',
      teacherNumber: 492,
      salary: 500,
    },
  ];

  create(createTeacherDto: CreateTeacherDto) {
    const newTeacher = {
      ...createTeacherDto,
      id: Date.now(),
    };
    this.teachers.push(newTeacher);

    return newTeacher;
  }

  findAll() {
    return this.teachers;
  }

  findOne(id: number) {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    if (!teacher) {
      throw new Error('teacher not found');
    }

    return teacher;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
