import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './features/common/app-common-module';
import { MainComponent } from './features/main/main/main.component';
import { StudentComponent } from './features/main/student/student.component';
import { EmployeeComponent } from './features/main/employee/employee.component';
import { VehicleComponent } from './features/main/vehicle/vehicle.component';
import { BatchComponent } from './features/main/batch/batch.component';
import { EnquiryComponent } from './features/main/enquiry/enquiry.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
