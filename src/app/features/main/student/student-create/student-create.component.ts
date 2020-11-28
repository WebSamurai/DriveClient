import { Component, Inject, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { extend } from 'lodash';
import { SelectItem } from 'src/app/features/common/drop-select/SelectItem';
import { ModelBase } from 'src/app/features/common/modal/ModelBase';
import { Gender, StudentDto, StudentSeviceProxy } from 'src/app/features/services/service.proxy';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.less']
})
export class StudentCreateComponent extends ModelBase<StudentDto> implements OnInit {
  schools: SelectItem<number>[] = [];
  batches: SelectItem<number>[] = [];
  genderList: SelectItem<number>[] = [];
  constructor(injector: Injector, private studentService: StudentSeviceProxy) {
    super(injector);
    this.entity = new StudentDto();
    super.ngOnInit();
  }

  ngOnInit(): void {
  }
  public buildForm() {
    this.entityForm = this.formBuider.group({
      firstName: [this.entity.firstName, [Validators.required]],
      midleName: [this.entity.midleName],
      lastName: [this.entity.lastName, [Validators.required]],
      emailAddress: [this.entity.emailAddress, [Validators.required]],
      address: [this.entity.address],
      mobileNo: [this.entity.mobileNo, [Validators.required]],
      alternateNo: [this.entity.alternateNo],
      birthDate: [this.entity.birthDate, [Validators.required]],
      isWatsApp: [this.entity.isWatsApp ?? false],
      courseStartDate: [this.entity.courseStartDate, [Validators.required]],
      courseEndDate: [this.entity.courseEndDate, [Validators.required]],
      profilePicture: [this.entity.profilePicture],
      batchId: [this.entity.batchId],
      schoolId: [this.entity.schoolId],
      gender: [this.entity.gender, [Validators.required]],

    });
  }
  public fillDropdowns() {
    this.bindSchool();
    this.bindbatches();
    this.bindGender();
  }
  private bindSchool() {
    this.schools.push({ value: null, label: 'Please Select school' });

    this.selectService.getStudy().subscribe(x => {
      x.map(y => this.schools.push({ value: y.value, label: y.label }));
    });
  }
  private bindbatches() {
    this.batches.push({ value: null, label: 'Please Select batch' });

    this.selectService.getBatch().subscribe(x => {
      x.map(y => this.batches.push({ value: y.value, label: y.label }));
    });
  }
  private bindGender() {
    this.genderList.push({ value: -1, label: 'Please Select gender' });
    Object.keys(Gender).filter(e => !isNaN(+e)).map(x => this.genderList.push({ value: +x, label: Gender[x] }));
  }
  public save() {
    this.entity = { ...this.entity, ...this.entityForm.value };
    if (this.entity.id > 0) {
      this.studentService.update(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('Student Updated Successfully :)');
        this.bsModalRef.hide();
      });
    }
    else {

      this.studentService.add(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('Student created Successfully :)');
        this.bsModalRef.hide();
      }
      );
    }
  }
}
