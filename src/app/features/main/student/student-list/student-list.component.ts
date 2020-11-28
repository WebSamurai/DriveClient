import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentDto, StudentListDto, StudentSeviceProxy } from 'src/app/features/services/service.proxy';
import { ModelHelper } from 'src/app/features/common/modal/model-helper';
import { StudentCreateComponent } from '../student-create/student-create.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less'],

})
export class StudentListComponent implements OnInit {

  students: StudentListDto[];
  private bsModelRef: BsModalRef;
  constructor(private modelService: ModelHelper, private studentService: StudentSeviceProxy) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getAll().subscribe(x => this.students = x);
  }
  openAdd() {
    this.bsModelRef = this.modelService.openModel(StudentCreateComponent, null);
    this.bsModelRef.content.onUpdate.subscribe(x => this.students.push(x));
  }
  editStudent(studentDto: StudentListDto) {
    this.bsModelRef = this.modelService.openModel(StudentCreateComponent, studentDto);
    this.bsModelRef.content.onUpdate.subscribe(x => this.getStudents());
  }
  showMore(studentDto: StudentDto) {
    this.bsModelRef = this.modelService.openModel(StudentCreateComponent, studentDto, true);
    // this.bsModelRef.content.onUpdate.subscribe(x => this.getStudents());
  }
}
