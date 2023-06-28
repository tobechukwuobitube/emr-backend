import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  private students = [
    {
      id: 1,
      nationalId: 23,
      name: 'Mark',
      surname: 'Dave',
      dateOfBirth: '23-20-2005',
      studentNumber: 23,
    },
    {
      id: 2,
      nationalId: 81,
      name: 'Phil',
      surname: 'Mike',
      dateOfBirth: '03-08-200',
      studentNumber: 5,
    },
  ];

  create(createStudentDto: CreateStudentDto) {
    const newStudent = {
      ...createStudentDto,
      id: Date.now(),
    };
    this.students.push(newStudent);

    return newStudent;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new Error('student not found');
    }

    return student;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
