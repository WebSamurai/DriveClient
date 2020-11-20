import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common/app-common-module';
import { AppHttpInterseptor } from '../common/http-intersepter';
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
        ApiServiceProxies.AuthSeviceProxy,
        { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterseptor, multi: true }
    ]
})
export class ServiceProxyModule { }
