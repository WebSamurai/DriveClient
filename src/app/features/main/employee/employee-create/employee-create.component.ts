import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { extend } from 'lodash';
import { SelectItem } from 'src/app/features/common/drop-select/SelectItem';
import { ModelBase } from 'src/app/features/common/modal/ModelBase';
import { EmployeeDto, EmployeeSeviceProxy, Gender, JobType, StudentDto, StudentSeviceProxy } from 'src/app/features/services/service.proxy';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.less']
})
export class EmployeeCreateComponent extends ModelBase<EmployeeDto> implements OnInit {

  jobTypes: SelectItem<number>[] = [];
  genderList: SelectItem<number>[] = [];
  constructor(injector: Injector, private employeeService: EmployeeSeviceProxy) {
    super(injector);
    this.entity = new EmployeeDto();
  }

  ngOnInit(): void {
    super.ngOnInit();

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
      profilePicture: [this.entity.profilePicture],
      gender: [this.entity.gender, [Validators.required]],
      jobType: [this.entity.jobType, [Validators.required]],

    });
  }
  public fillDropdowns() {
    this.bindGender();
    this.bindJobType();
  }

  private bindGender() {
    this.genderList.push({ value: null, label: 'Please Select gender' });
    Object.keys(Gender).filter(e => !isNaN(+e)).map(x => this.genderList.push({ value: +x, label: Gender[x] }));
  }
  private bindJobType() {
    this.jobTypes.push({ value: null, label: 'Please Select Job Type' });
    Object.keys(JobType).filter(e => !isNaN(+e)).map(x => this.jobTypes.push({ value: +x, label: JobType[x] }));
  }
  public save() {
    this.entity = { ...this.entity, ...this.entityForm.value };
    if (this.entity.id > 0) {
      this.employeeService.update(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('Student Updated Successfully :)');
        this.bsModalRef.hide();
      });
    }
    else {
      this.entity.schoolId = this.tokenService.getSchoolId();
      this.employeeService.add(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('Student created Successfully :)');
        this.bsModalRef.hide();
      }
      );
    }
  }

}
