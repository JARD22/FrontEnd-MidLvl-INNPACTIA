import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRepairComponent } from './new-repair.component';

const routes: Routes = [
  {
    path:'',
    component:NewRepairComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRepairRoutingModule { }
