import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
import {  SimpleNotificationsModule } from 'angular2-notifications';




@NgModule({
  declarations: [TemplateFormComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    NgxDaterangepickerMd.forRoot(),
    SimpleNotificationsModule.forRoot()
  
  ]
})
export class TemplateModule { }
