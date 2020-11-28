import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './features/common/app-common-module';
import { ServiceProxyModule } from './features/services/service.proxy.module';
import { API_BASE_URL } from './features/services/service.proxy';
import { AppConsts } from './App.constant';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
export function TokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppCommonModule,
    ServiceProxyModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: TokenGetter
      }
    }),
  ],
  providers: [
    { provide: API_BASE_URL, useFactory: () => AppConsts.apiBaseUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
