import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { ReportComponent } from './report/report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeaveModule { }
