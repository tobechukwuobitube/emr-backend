import { IsEnum } from 'class-validator';

export class CreateTeacherDto {
  nationalId: number;

  @IsEnum(['Mr', 'Mrs', 'Miss', 'Dr', 'Prof'], {
    message: 'Please select the appropriate title',
  })
  title: string;

  name: string;

  surname: string;

  dateOfBirth: string;

  teacherNumber: number;

  salary: number;
}
