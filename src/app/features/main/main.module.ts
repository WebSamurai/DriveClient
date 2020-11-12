import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '../common/app-common-module';
import { MainRoutingModule } from './main-rounting.module';
import { BatchComponent } from './batch/batch.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { MainComponent } from './main/main.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        AppCommonModule,
        MainRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    declarations: [MainComponent,
        SchoolComponent,
        EnquiryComponent,
        StudentComponent,
        BatchComponent,
        VehicleComponent,
        DashboardComponent
    ]
})
export class MainModule { }