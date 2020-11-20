import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageControlComponent } from './image-control/image-control.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot()
    ],
    declarations: [
        NavbarComponent,
        LoginNavBarComponent,
        VerticalNavbarComponent,
        ImageControlComponent
    ],
    exports: [NavbarComponent, LoginNavBarComponent, VerticalNavbarComponent, ImageControlComponent]
})
export class AppCommonModule {

}
