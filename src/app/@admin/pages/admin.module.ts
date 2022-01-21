import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AdminComponent } from './admin.component';
import { TitleComponent } from '../shared/components/title/title.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';
import { NewRepairComponent } from './new-repair/new-repair.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { NdatePipe } from '../../pipes/ndate.pipe';



@NgModule({
  declarations: [AdminComponent,
     TitleComponent,
     HeaderComponent,
     SidebarComponent, 
     FooterComponent, NewPhoneComponent, NewRepairComponent, 
    
     
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   PipesModule
    
  ]
})
export class AdminModule { }
