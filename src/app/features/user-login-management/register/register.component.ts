import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserDto, UserSeviceProxy } from '../../services/service.proxy';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public userName: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  public emailAddress: FormControl;
  public lastName: FormControl;
  public firstName: FormControl;
  public schoolName: FormControl;
  public showAllValidaiton: boolean;
  user = new UserDto();
  constructor(
    private userService: UserSeviceProxy,
    private messageSerive: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm() {
    this.userName = new FormControl(this.user.userName, [Validators.required, Validators.minLength(4),
    ]);
    this.password = new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      this.checkPasswords,
    ]);
    this.emailAddress = new FormControl(this.user.emailAddress, [
      Validators.required,
      Validators.email,
    ]);
    this.lastName = new FormControl(this.user.lastName, [Validators.required]);
    this.firstName = new FormControl(this.user.firstName, [
      Validators.required,
    ]);
    this.schoolName = new FormControl(this.user.schoolName, [
      Validators.required,
    ]);
    this.userForm = new FormGroup({
      userName: this.userName,
      password: this.password,
      confirmPassword: this.confirmPassword,
      emailAddress: this.emailAddress,
      lastName: this.lastName,
      firstName: this.firstName,
      schoolName: this.schoolName

    });
  }
  checkPasswords = (control: FormControl) => {
    const pass = this.password?.value;
    const confirmPass = this.confirmPassword?.value;

    return pass === confirmPass ? null : { notSame: true };
  }
  public register(data) {
    const userData = data as UserDto;
    this.userService.add(userData).subscribe((x) => {
      console.log(x);
      this.messageSerive.success('User Register Successufully :)');
      this.router.navigate(['account/login']);
    });
  }
}
