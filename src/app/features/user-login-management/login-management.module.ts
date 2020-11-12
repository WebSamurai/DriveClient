import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AppCommonModule } from '../common/app-common-module';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        AppCommonModule,
        AccountRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule],
    declarations: [
        LoginHomeComponent,
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
        ForgotPasswordComponent
    ],

    providers: [],
    entryComponents: [LoginHomeComponent]
})
export class LoginManagementModule { }
