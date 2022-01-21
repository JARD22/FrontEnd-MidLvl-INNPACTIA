import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NdatePipe } from './ndate.pipe';



@NgModule({
  declarations: [NdatePipe],
  imports: [
    CommonModule
  ],
  exports:[
    NdatePipe
  ]
})
export class PipesModule { }
