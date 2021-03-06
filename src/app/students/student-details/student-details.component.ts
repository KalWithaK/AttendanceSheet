import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent{
  @Input()
  student: Student;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private studentService: StudentService) { }

  createStudent(student: Student) {
    this.studentService.createStudent(student).then((newStudent: Student) => {
      this.createHandler(newStudent);
    });
  }

  updateStudent(student: Student): void {
    this.studentService.updateStudent(student).then((updatedStudent: Student) => {
      this.updateHandler(updatedStudent);
    });
  }

  deleteStudent(studentId: String): void {
    this.studentService.deleteStudent(studentId).then((deletedStudentId: String) => {
      this.deleteHandler(deletedStudentId);
    });
  }
  
}


