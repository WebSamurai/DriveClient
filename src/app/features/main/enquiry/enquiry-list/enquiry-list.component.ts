import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { ModelHelper } from 'src/app/features/common/modal/model-helper';
import { EnquiryDto, EnquirySeviceProxy } from 'src/app/features/services/service.proxy';
import { EnquiryCreateComponent } from '../enquiry-create/enquiry-create.component';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.less']
})
export class EnquiryListComponent implements OnInit {
  enquiries: EnquiryDto[];
  private bsModelRef: BsModalRef;

  constructor(private modelService: ModelHelper, private enquiryService: EnquirySeviceProxy) { }

  ngOnInit() {
    this.getEqueries();
  }
  getEqueries() {
    this.enquiryService.getAll().subscribe(x => this.enquiries = x);
  }
  openAdd() {
    this.bsModelRef = this.modelService.openModel(EnquiryCreateComponent, null);
    this.bsModelRef.content.onUpdate.subscribe(x => this.enquiries.push(x));
  }
  editEnquiry(enquiryDto: EnquiryDto) {
    this.bsModelRef = this.modelService.openModel(EnquiryCreateComponent, enquiryDto);
    this.bsModelRef.content.onUpdate.subscribe(x => this.getEqueries());
  }
  showMore(enquiryDto: EnquiryDto) {
    this.bsModelRef = this.modelService.openModel(EnquiryCreateComponent, enquiryDto, true);
    // this.bsModelRef.content.onUpdate.subscribe(x => this.getStudents());
  }

}
