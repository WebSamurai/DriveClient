import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'src/app/features/common/drop-select/SelectItem';
import { ModelBase } from 'src/app/features/common/modal/ModelBase';
import { BatchDto, BatchSeviceProxy } from 'src/app/features/services/service.proxy';
import * as moment from 'moment-timezone';
@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.less']
})
export class CreateBatchComponent extends ModelBase<BatchDto> implements OnInit {


  schools: SelectItem<number>[] = [];
  batchTemplates: SelectItem<number>[] = [];
  constructor(injector: Injector, private batchService: BatchSeviceProxy) {
    super(injector);
    this.entity = new BatchDto();

  }

  ngOnInit(): void {
    super.ngOnInit();

  }
  fillDropdowns() {
    this.bindSchool();
    this.bindBatchTemplateSchool();

  }

  private bindSchool() {
    this.schools.push({ value: null, label: 'Please Select school' });

    this.selectService.getStudy().subscribe(x => {
      x.map(y => this.schools.push({ value: y.value, label: y.label }));
    });
  }
  private bindBatchTemplateSchool() {
    this.batchTemplates.push({ value: null, label: 'Please Select school' });

    this.selectService.getBatchScheduleTemplate().subscribe(x => {
      x.map(y => this.batchTemplates.push({ value: y.value, label: y.label }));
    });
  }

  public buildForm() {
    this.entityForm = this.formBuider.group({
      name: [this.entity.name, [Validators.required]],
      startDate: [this.entity.startDate, [Validators.required, this.validateDates.bind(this)]],
      endDate: [this.entity.endDate, [Validators.required, this.validateDates.bind(this)]],
      schoolId: [this.entity.schoolId, [Validators.required]],
      batchTime: [this.entity.batchTime, [Validators.required]],
      batchScheduleTemplateId: [this.entity.batchScheduleTemplateId, [Validators.required]]
    });
  }
  validateDates(control: FormControl) {
    if (!this.entityForm) {
      return null;
    }
    const startDate = this.entityForm?.get('startDate')?.value;
    const endDate = this.entityForm?.get('endDate')?.value;
    if (startDate && endDate) {
      const strDate = moment(startDate);
      const enDate = moment(endDate);
      if (strDate.isAfter(enDate)) {
        return { dateInvalid: true };
      }
      this.entityForm?.get('startDate').setErrors(null);
      this.entityForm?.get('endDate').setErrors(null);
      this.entityForm.updateValueAndValidity();
      return null;
    }
  }
  public updateView() {

    super.updateView();
  }
  public save() {
    this.entity = { ...this.entity, ...this.entityForm.value };
    if (this.entity.id > 0) {
      this.batchService.update(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('batch Updated Successfully :)');
        this.bsModalRef.hide();
      });
    }
    else {

      this.batchService.add(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('batch created Successfully :)');
        this.bsModalRef.hide();
      }
      );


    }

  }

}
