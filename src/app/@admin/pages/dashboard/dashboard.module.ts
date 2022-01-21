import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { NdatePipe } from '../../../pipes/ndate.pipe';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PipesModule
  ]
})
export class DashboardModule { }
