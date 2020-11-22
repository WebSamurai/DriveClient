import { Component, OnInit } from '@angular/core';
import { SchoolDto, SchoolSeviceProxy } from '../../services/service.proxy';
import { TokenService } from '../../services/token-service';
import { isNil } from 'lodash';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { EditSchoolComponent } from './edit-school/edit-school.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.less']
})
export class SchoolComponent implements OnInit {
  school: SchoolDto;
  bsModalRef: BsModalRef;
  constructor(private tokenService: TokenService, private schoolService: SchoolSeviceProxy, private modalService: BsModalService) { }

  ngOnInit(): void {
    const schoolId = this.tokenService.getSchoolId();
    this.schoolService.get(schoolId).subscribe(x => this.school = x);
  }

  public editSchool() {
    const modelOption = new ModalOptions();
    modelOption.backdrop = 'static';
    modelOption.keyboard = false;
    modelOption.class = 'modal-lg';
    this.bsModalRef = this.modalService.show(EditSchoolComponent, modelOption);
    this.bsModalRef.content.school = this.school;
    this.bsModalRef.content.updateView();
    this.bsModalRef.content.onUpdate.subscribe(x => this.school = x);

  }
  getImage() {
    return isNil(this.school?.logoImage) || this.school?.logoImage === '' ? 'assets/images/school.jpg' : `data:image/jpeg;base64,'${this.school?.logoImage}`;
  }
}
