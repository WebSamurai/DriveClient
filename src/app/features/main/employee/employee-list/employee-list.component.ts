import { Component, OnInit } from '@angular/core';
import { isNil } from 'lodash';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { ModelHelper } from 'src/app/features/common/modal/model-helper';
import { EmployeeDto, EmployeeSeviceProxy, JobType } from 'src/app/features/services/service.proxy';
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeDto[];
  private bsModelRef: BsModalRef;
  constructor(private modelService: ModelHelper, private studentService: EmployeeSeviceProxy) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getAll().subscribe(x => this.employees = x);
  }
  openAdd() {
    this.bsModelRef = this.modelService.openModel(EmployeeCreateComponent, null);
    this.bsModelRef.content.onUpdate.subscribe(x => this.employees.push(x));
  }
  edit(studentDto: EmployeeDto) {
    this.bsModelRef = this.modelService.openModel(EmployeeCreateComponent, studentDto);
    this.bsModelRef.content.onUpdate.subscribe(x => this.getStudents());
  }
  showMore(studentDto: EmployeeDto) {
    this.bsModelRef = this.modelService.openModel(EmployeeCreateComponent, studentDto, true);
    // this.bsModelRef.content.onUpdate.subscribe(x => this.getStudents());
  }
  getJobType(jobType): string {
    if (isNil(jobType)) {
      return '';
    }
    return jobType === 0 ? 'driver' : 'staf';
  }
}
