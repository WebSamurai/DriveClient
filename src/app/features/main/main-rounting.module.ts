import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BatchComponent } from './batch/batch.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { MainComponent } from './main/main.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
    imports: [RouterModule.forChild(
        [
            {
                path: '',
                component: MainComponent,
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'student', component: StudentComponent },
                    { path: 'enquiry', component: EnquiryComponent },
                    { path: 'school', component: SchoolComponent },
                    { path: 'vehicle', component: VehicleComponent },
                    { path: 'batch', component: BatchComponent },
                    { path: 'dashboard', component: DashboardComponent }
                ]
            }
        ])]
    ,
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }