import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavbarComponent,
        LoginNavBarComponent,
        VerticalNavbarComponent
    ],
    exports: [NavbarComponent, LoginNavBarComponent, VerticalNavbarComponent]
})
export class AppCommonModule {

}
