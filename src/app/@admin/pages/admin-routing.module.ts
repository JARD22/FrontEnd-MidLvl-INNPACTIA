import { NgModule } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      },

      {
        path:'nueva-persona',
        loadChildren:()=> import('./nueva-persona/nueva-persona.module').then(m=>m.NuevaPersonaModule)
      },   
     {
       path:'new-phone/:clientID',
       loadChildren:()=>import('./new-phone/new-phone.module').then(m=>m.NewPhoneModule)
     },
     {
       path:'new-repair/:phoneID',
       loadChildren:()=>import('./new-repair/new-repair.module').then(m=>m.NewRepairModule)
     },
      {
        path:'**',
        redirectTo:'admin',
        pathMatch:'full'
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
