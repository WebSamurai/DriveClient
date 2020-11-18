import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGruard } from 'src/app/app-authguard';
import { BatchComponent } from './batch/batch.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { MainComponent } from './main/main.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
    imports: [RouterModule.forChild(
        [
            {
                path: '',
                component: MainComponent,
                canDeactivate: [AuthGruard],
                children: [
                    { path: '', redirectTo: 'dashboard' },
                    { path: 'student', component: StudentComponent },
                    { path: 'enquiry', component: EnquiryComponent },
                    { path: 'school', component: SchoolComponent },
                    { path: 'vehicle', component: VehicleComponent },
                    { path: 'batch', component: BatchComponent },
                    { path: 'employee', component: EmployeeComponent },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'user/profile', component: UserProfileComponent },
                    { path: 'user/user/edit', component: EditUserProfileComponent },
                ]

            },


        ])]
    ,
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
