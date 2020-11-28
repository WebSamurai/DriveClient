import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { extend } from 'lodash';
import * as moment from 'moment';
import { SelectItem } from 'src/app/features/common/drop-select/SelectItem';
import { ModelBase } from 'src/app/features/common/modal/ModelBase';
import { EnquiryDto, StudentSeviceProxy, StudentDto, Gender, EnquirySeviceProxy, PrefferedBatch } from 'src/app/features/services/service.proxy';

@Component({
  selector: 'app-enquiry-create',
  templateUrl: './enquiry-create.component.html',
  styleUrls: ['./enquiry-create.component.less']
})
export class EnquiryCreateComponent extends ModelBase<EnquiryDto> implements OnInit {

  schools: SelectItem<number>[] = [];
  prefferdbatches: SelectItem<number>[] = [];
  genderList: SelectItem<number>[] = [];
  constructor(injector: Injector, private enquiryService: EnquirySeviceProxy) {
    super(injector);
    this.entity = new EnquiryDto();
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
      mobileNo: [this.entity.mobileNo, [Validators.required]],
      address: [this.entity.address],
      alternateNo: [this.entity.alternateNo],
      birthDate: [this.entity.birthDate, [Validators.required]],
      isWatsApp: [this.entity.isWatsApp ?? false],
      gender: [this.entity.gender, [Validators.required]],
      prefferdBatch: [this.entity.prefferdBatch, [Validators.required]],

    });
  }
  public fillDropdowns() {
    this.bindPreferedBatchs();
    this.bindGender();
  }
  private bindPreferedBatchs() {
    this.prefferdbatches.push({ value: null, label: ' Select Prefferd Batch' });
    Object.keys(PrefferedBatch).filter(e => !isNaN(+e)).map(x => this.prefferdbatches.push({ value: +x, label: PrefferedBatch[x] }));
  }
  private bindGender() {
    this.genderList.push({ value: null, label: 'Please Select gender' });
    Object.keys(Gender).filter(e => !isNaN(+e)).map(x => this.genderList.push({ value: +x, label: Gender[x] }));
  }
  public save() {
    this.entity = { ...this.entity, ...this.entityForm.value };
    if (this.entity.id > 0) {
      this.enquiryService.update(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('Student Updated Successfully :)');
        this.bsModalRef.hide();
      });
    }
    else {
      this.entity.schoolId = this.tokenService.getSchoolId();
      this.entity.enquiryStartDate = moment();
      this.entity.followupDate = moment().add(7, 'days');
      this.enquiryService.add(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('Enquiry created Successfully :)');
        this.bsModalRef.hide();
      }
      );
    }
  }
}
