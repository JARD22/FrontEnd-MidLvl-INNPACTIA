import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path:'login',
        loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)
      },
      {
        path:'cambio-contrasena',
        loadChildren:()=>import('./cambio-contrasena/cambio-contrasena.module').then(m=>m.CambioContrasenaModule)
      },
      {
        path:'**',
        redirectTo:'login',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
