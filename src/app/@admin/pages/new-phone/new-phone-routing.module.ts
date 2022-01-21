import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPhoneComponent } from './new-phone.component';

const routes: Routes = [
  {
    path:'',
    component: NewPhoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPhoneRoutingModule { }
