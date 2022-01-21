import { Component, OnInit } from '@angular/core';
import { ReparacionesService } from '../../services/reparaciones.service';
import { Reparaciones, ReparacionesResp } from '../../../models/interfaces/reparaciones.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {


  public estados:any[]= [{id:1,desc:"Nueva"},{id:2,desc:"En proceso"},{id:1,desc:"Finalizado"}];

  reparaciones:Reparaciones[]=[]
  desde:number=0;

  constructor(private reparacionesService:ReparacionesService) { }

  ngOnInit(): void {

    this.cargarReparciones();
  }

  cambiarPagina(valor){
   
    this.desde+=valor
  
    if(this.desde<0){
      this.desde=0

    }else if(this.desde >=this.reparaciones[0].TOTAL_REPARACIONES){
      this.desde -= valor
    }
    this.cargarReparciones();
    
  }

  cargarReparciones(){
    this.reparacionesService.reparaciones(10,this.desde).subscribe(
      (resp:ReparacionesResp)=>{
        this.reparaciones = resp.data
      }
    )
  }


}
