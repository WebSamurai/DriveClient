import { Component, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { SchoolDto, SchoolSeviceProxy, UserDto, UserSeviceProxy } from 'src/app/features/services/service.proxy';
import { isNil } from 'lodash';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.less']
})
export class EditSchoolComponent implements OnInit {

  public school: SchoolDto = new SchoolDto();
  public editForm: FormGroup;
  public onUpdate = new EventEmitter<SchoolDto>();
  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private schoolService: SchoolSeviceProxy,
    private messgeService: ToastrService) { }
  photo: any;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.editForm = this.formBuilder.group({
      name: [this.school.name, [Validators.required]],
      address: [this.school.address, [Validators.required]],
      tagLine: [this.school.tagLine],
      logoImage: [this.school.logoImage === '' ? null : this.school.logoImage]
    });
  }
  updateView() {
    this.buildForm();
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  saveSchool() {
    const data = this.editForm.value;
    this.school = { ...this.school, ...data, };
    this.schoolService.update(this.school).subscribe(x => {
      this.messgeService.success('User Updated successfully :)');
      this.onUpdate.emit(x);
      this.bsModalRef.hide();
    });
  }
  getPhoto() {
    return this.photo === undefined ? '/assets/images/profile.png' : 'data:image/jpeg;base64,' + this.photo;
  }
  close() {
    if (this.editForm?.dirty) {
      if (confirm('Form has Unsaved values do you want to discard the chagnes ?')) {
        this.bsModalRef.hide();

      } else {
        return;
      }
    }
    this.bsModalRef.hide();
  }
}
