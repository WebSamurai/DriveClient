import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { UserDto, UserSeviceProxy } from 'src/app/features/services/service.proxy';

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
    private messgeService: ToastrService) { }
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
      photo: [this.user.photo]
    });
  } updateView() {
    this.buildForm();
    this.editForm.get('confirmPassword').setValue(this.user.password);
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
    this.user.photo = this.photo;
    this.userService.update(this.user).subscribe(x => {
      this.messgeService.success('User Updated successfully :)');
      this.onUpdate.emit(x);
      this.bsModalRef.hide();
    });
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
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.photo = reader.result;

  }
}
