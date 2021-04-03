import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditSchoolComponent } from './school/edit-school/edit-school.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { BatchListComponent } from './batch/batch-list/batch-list.component';
import { CreateBatchComponent } from './batch/create-batch/create-batch.component';
import { EnquiryListComponent } from './enquiry/enquiry-list/enquiry-list.component';
import { EnquiryCreateComponent } from './enquiry/enquiry-create/enquiry-create.component';
import { BatcheScheduleTemplateComponent } from './batch-schedule/batche-schedule-template/batche-schedule-template.component';
// tslint:disable-next-line:max-line-length
import { BatcheScheduleTemplateListComponent } from './batch-schedule/batche-schedule-template-list/batche-schedule-template-list.component';
import { BatcheScheduleTemplateCreateComponent } from './batch-schedule/batche-schedule-template-create/batche-schedule-template-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeComponent } from './employee/employee.component';
import { ScheduleListComponent } from './student/schedule-list/schedule-list.component';
@NgModule({
    imports: [
        AppCommonModule,
        RouterModule,
        CommonModule,
        MainRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,

    ],
    declarations: [MainComponent,
        SchoolComponent,
        EnquiryComponent,
        StudentComponent,
        BatchComponent,
        VehicleComponent,
        DashboardComponent,
        EditUserProfileComponent,
        UserProfileComponent,
        EditSchoolComponent,
        StudentListComponent,
        StudentCreateComponent,
        BatchListComponent,
        CreateBatchComponent,
        EnquiryListComponent,
        EnquiryCreateComponent,
        BatcheScheduleTemplateComponent,
        BatcheScheduleTemplateListComponent,
        BatcheScheduleTemplateCreateComponent,
        EmployeeCreateComponent,
        EmployeeListComponent,
        EmployeeComponent,
        ScheduleListComponent


    ],
})
export class MainModule { }
