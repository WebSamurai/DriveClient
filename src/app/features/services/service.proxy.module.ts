import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common/app-common-module';
import * as ApiServiceProxies from './service.proxy';


@NgModule({
    imports: [HttpClientModule],
    providers: [
        ApiServiceProxies.UserSeviceProxy,
        ApiServiceProxies.StudentSeviceProxy,
        ApiServiceProxies.SchoolSeviceProxy,
        ApiServiceProxies.BatchSeviceProxy,
        ApiServiceProxies.VehicleSeviceProxy,
        ApiServiceProxies.EmployeeSeviceProxy,
        ApiServiceProxies.AuthSeviceProxy
    ]
})
export class ServiceProxyModule { }