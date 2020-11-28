import { Component, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { UserDto, UserSeviceProxy } from 'src/app/features/services/service.proxy';
import { isNil } from 'lodash';
import { AppMessageService } from 'src/app/features/services/message-service';
@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.less']
})
export class EditUserProfileComponent implements OnInit {
  public user: UserDto = new UserDto();
  public editForm: FormGroup;
  public onUpdate = new EventEmitter<UserDto>();
  constructor(
    public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private userService: UserSeviceProxy,
    private messgeService: ToastrService,
    private appMessageService: AppMessageService) { }
  photo: any;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.editForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      emailAddress: [this.user.emailAddress, [Validators.required, Validators.email]],
      phoneNumber: [this.user.phoneNumber, [Validators.required,
      Validators.maxLength(10)]],
      confirmPassword: [this.user.password, [Validators.required, Validators.minLength(5), this.checkPasswords]],
      password: [this.user.password, [Validators.required, Validators.minLength(5)]],
      photo: [this.user.photo],
    });
  }

  updateView() {
    this.buildForm();
    this.editForm.get('confirmPassword').setValue(this.user.password);
  }
  public validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
  checkPasswords = (control: FormControl) => {
    const pass = this.editForm?.get('password')?.value;
    const confirmPass = control?.value;

    return pass === confirmPass ? null : { notSame: true };
  }
  saveUser() {
    const data = this.editForm.value;
    delete data.confirmPassword;
    this.user = { ...this.user, ...data, };
    this.userService.update(this.user).subscribe(x => {
      this.messgeService.success('User Updated successfully :)');
      this.onUpdate.emit(x);
      this.appMessageService.setUserUpdate(x);
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
