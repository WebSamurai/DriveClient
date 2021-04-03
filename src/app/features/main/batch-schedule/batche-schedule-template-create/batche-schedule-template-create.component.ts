import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModelBase } from 'src/app/features/common/modal/ModelBase';
import { BatchScheduleTemplateDto, BatchScheduleTemplateSeviceProxy } from 'src/app/features/services/service.proxy';

@Component({
  selector: 'app-batche-schedule-template-create',
  templateUrl: './batche-schedule-template-create.component.html',
  styleUrls: ['./batche-schedule-template-create.component.less']
})
export class BatcheScheduleTemplateCreateComponent extends ModelBase<BatchScheduleTemplateDto> implements OnInit {
  constructor(injector: Injector, private batchService: BatchScheduleTemplateSeviceProxy) {
    super(injector);
    this.entity = new BatchScheduleTemplateDto();

  }

  ngOnInit(): void {
    super.ngOnInit();

  }

  public buildForm() {
    this.entityForm = this.formBuider.group({
      name: [this.entity.name, [Validators.required]],
      description: [this.entity.description],
      numberOfPracticalSession: [this.entity.numberOfPracticalSession, [Validators.required]],
      numberOfTheorySession: [this.entity.numberOfTheorySession, [Validators.required]],
    });
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
      this.entity.schoolId = this.tokenService.getSchoolId();
      this.batchService.add(this.entity).subscribe(x => {
        this.onUpdate.emit(x);
        this.messageService.success('batch created Successfully :)');
        this.bsModalRef.hide();
      }
      );


    }

  }
}
