import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModelHelper } from 'src/app/features/common/modal/model-helper';
import { StudentListDto, StudentSeviceProxy, StudentDto, StudentScheduleSeviceProxy, StudentScheduleDto } from 'src/app/features/services/service.proxy';
import { StudentCreateComponent } from '../student-create/student-create.component';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.less']
})
export class ScheduleListComponent implements OnInit {

  schedules: StudentScheduleDto[];
  private bsModelRef: BsModalRef;
  constructor(private modelService: ModelHelper, private studentScheduleService: StudentScheduleSeviceProxy) { }

  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentScheduleService.getScheduleForStudent(4).subscribe(x => this.schedules = x);
  }
  openAdd() {
    this.bsModelRef = this.modelService.openModel(StudentCreateComponent, null);
    this.bsModelRef.content.onUpdate.subscribe(x => this.schedules.push(x));
  }
  editStudent(studentDto: StudentListDto) {
    this.bsModelRef = this.modelService.openModel(StudentCreateComponent, studentDto);
    this.bsModelRef.content.onUpdate.subscribe(x => this.getStudents());
  }
  showMore(studentDto: StudentDto) {
    this.bsModelRef = this.modelService.openModel(StudentCreateComponent, studentDto, true);
    // this.bsModelRef.content.onUpdate.subscribe(x => this.getStudents());
  }
  getStatus(item: StudentScheduleDto) {
    return item.isAttended && item.isInstructorSignOff ? 'Finished' : 'Scheduled';
  }
}
