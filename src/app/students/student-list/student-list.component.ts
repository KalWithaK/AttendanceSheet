import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})

export class StudentListComponent implements OnInit {

  students: Student[]
  selectedStudent: Student

  constructor(private studentService: StudentService) { }
}import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})

export class StudentListComponent implements OnInit {

  students: Student[]
  selectedStudent: Student

  constructor(private studentService: StudentService) { }

  ngOnInit() {
   this.studentService
    .getStudents()
    .then((students: Student[]) => {
      this.students = students.map((student) => {
        return student;
      });
    });
}

private getIndexOfStudent = (studentId: String) => {
   return this.students.findIndex((student) => {
     return student._id === studentId;
   });
 }

 selectStudent(student: Student) {
    this.selectedStudent = student
  }

 createNewStudent() {
    var student: Student = {
      name: '',
      email: '',
      present: ''

    };
 this.selectStudent(student);
  }

  deleteStudent = (studentId: String) => {
    var idx = this.getIndexOfStudent(studentId);
    if (idx !== -1) {
      this.students.splice(idx, 1);
      this.selectStudent(null);
    }
    return this.students;
  }
  
  addStudent = (student: Student) => {
    this.students.push(student);
    this.selectStudent(student);
    return this.students;
  }

  updateStudent = (student: Student) => {
    var idx = this.getIndexOfStudent(student._id);
    if (idx !== -1) {
      this.students[idx] = student;
      this.selectStudent(student);
    }
    return this.students;
  }
}
