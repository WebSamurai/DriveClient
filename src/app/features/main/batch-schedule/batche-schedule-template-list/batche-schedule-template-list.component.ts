import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { ModelHelper } from 'src/app/features/common/modal/model-helper';
import { BatchScheduleTemplateDto, BatchScheduleTemplateSeviceProxy } from 'src/app/features/services/service.proxy';
import { BatcheScheduleTemplateCreateComponent } from '../batche-schedule-template-create/batche-schedule-template-create.component';

@Component({
  selector: 'app-batche-schedule-template-list',
  templateUrl: './batche-schedule-template-list.component.html',
  styleUrls: ['./batche-schedule-template-list.component.less']
})
export class BatcheScheduleTemplateListComponent implements OnInit {

  private bsModelRef: BsModalRef;
  batchtTemplates: BatchScheduleTemplateDto[];
  constructor(private modelService: ModelHelper, private batchScheduleTemplateSeviceProxy: BatchScheduleTemplateSeviceProxy) { }

  ngOnInit(): void {
    this.getBatches();
  }
  getBatches() {
    this.batchScheduleTemplateSeviceProxy.getAll().subscribe(x => this.batchtTemplates = x);
  }
  openAdd() {
    this.bsModelRef = this.modelService.openModel(BatcheScheduleTemplateCreateComponent, null);
    this.bsModelRef.content.onUpdate.subscribe(x => this.batchtTemplates.push(x));
  }
  edit(data: BatchScheduleTemplateDto) {
    this.bsModelRef = this.modelService.openModel(BatcheScheduleTemplateCreateComponent, data);
    this.bsModelRef.content.onUpdate.subscribe(x => this.getBatches());
  }
  showMore(studentDto: BatchScheduleTemplateDto) {
    this.bsModelRef = this.modelService.openModel(BatcheScheduleTemplateCreateComponent, studentDto, true);
  }
}
