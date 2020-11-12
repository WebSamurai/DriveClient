import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '../common/app-common-module';
import { MainRoutingModule } from './main-rounting.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MainRoutingModule,
        AppCommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule
    ]
})
export class MainModule { }