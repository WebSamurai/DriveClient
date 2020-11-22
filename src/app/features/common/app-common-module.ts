import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageControlComponent } from './image-control/image-control.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule, DatePickerComponent } from 'ngx-bootstrap/datepicker';
import { DropSelectComponent } from './drop-select/drop-select.component';
import { TimePikerComponent } from './time-piker/time-piker.component';
@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TimepickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        NavbarComponent,
        LoginNavBarComponent,
        VerticalNavbarComponent,
        ImageControlComponent,
        DropSelectComponent,
        DatePickerComponent,
        TimePikerComponent
    ],
    exports: [NavbarComponent, LoginNavBarComponent,
        VerticalNavbarComponent,
        ImageControlComponent,
        DropSelectComponent,
        DatePickerComponent,
        TimePikerComponent,
        TimepickerModule,
        BsDatepickerModule,
    ]
})
export class AppCommonModule {

}
