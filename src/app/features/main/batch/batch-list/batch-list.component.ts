import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModelHelper } from 'src/app/features/common/modal/model-helper';
import { BatchDto, BatchSeviceProxy } from 'src/app/features/services/service.proxy';
import { CreateBatchComponent } from '../create-batch/create-batch.component';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.less']
})
export class BatchListComponent implements OnInit {
  private bsModelRef: BsModalRef;
  batches: BatchDto[];
  constructor(private modelService: ModelHelper, private batchService: BatchSeviceProxy) { }

  ngOnInit(): void {
    this.getBatches();
  }
  getBatches() {
    this.batchService.getAll().subscribe(x => this.batches = x);
  }
  openAdd() {
    this.bsModelRef = this.modelService.openModel(CreateBatchComponent, null);
    this.bsModelRef.content.onUpdate.subscribe(x => this.batches.push(x));
  }
  editBatch(data: BatchDto) {
    this.bsModelRef = this.modelService.openModel(CreateBatchComponent, data);
    this.bsModelRef.content.onUpdate.subscribe(x => this.getBatches());
  }
}
