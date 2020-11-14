import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthSeviceProxy } from '../../services/service.proxy';
import { TokenService } from '../../services/token-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthSeviceProxy,
    private tokenService: TokenService,
    private messgeService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void { }
  public login(data) {
    console.log(data);
    this.authService
      .login(data)
      .pipe(
        catchError((err: any) => {
          console.log(err);

          this.messgeService.error('UserName or Password Not correct');
          return of('invalid');
        })
      )
      .subscribe((res: any) => {
        if (res !== 'invalid') {
          console.log(res);
          this.tokenService.setUser(res);
          this.messgeService.success('login successfully :)');
          this.router.navigate(['/']);
        }
      });
  }
}
