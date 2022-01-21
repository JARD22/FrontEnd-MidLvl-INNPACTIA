import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { PersonService } from '../../services/person.service';
import { Client, ClientResponse } from '../../../models/interfaces/client.interface';


@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styles: [
  ]
})
export class NuevaPersonaComponent implements OnInit {


      tipo_personas:any[]= [{id:1,desc:'Cliente'},{id:2,desc:'Usuario'}]
      generos:any[]=[{desc:'Masculino'},{desc:'Femenino'},{desc:'No binario'},{desc:'Otro'},{desc:'Prefiero no decirlo'}]
       formEnviado:boolean=false;
       id_tipo_persona:any;
       personForm!:FormGroup;
       clientList:Client[]=[];
       desde:number=0;

  constructor(private personService:PersonService,
              private fb:FormBuilder) { 

                


}
   ngOnInit(): void {
    this.personForm= this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-záéíóúÁÉÍÓÚñÑ ]{2,25}$")]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.minLength(3)]],
      address:['',[Validators.required,Validators.maxLength(200),Validators.pattern('^[ A-Z a-z 0-9 . _ % + - , ; # ÁÉÍÓÚáéíóúÑñ()]{2,250}$')]], 
      gender:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-záéíóúÁÉÍÓÚñÑ ]{2,25}$")]],
      phoneNumber:['',Validators.required]
    });

   this.loadClients();
   }     

   sendForm(){
    this.formEnviado=true;

  
      this.personService.newClient(this.personForm.value).subscribe(
        (resp:any)=>{
          Swal.fire('Hecho',resp.msg,'success');
        },(error)=>{
          Swal.fire('Error',error.error.msg,'error');
        }
      )
      this.personForm.reset()
 
    this.formEnviado=false;
   
   }
  
   campoNoValido(campo:string):boolean{
    if (this.personForm.get(campo).invalid && this.formEnviado) {
      return true
    }else{
      return false
    }
  }


 loadClients(){
   this.personService.clientList(10,0).subscribe(
     (resp:ClientResponse)=>{
      this.clientList = resp.clients
      console.log(this.clientList)
     }
   )
 } 

 cambiarPagina(valor){
   
  this.desde+=valor

  if(this.desde<0){
    this.desde=0

  }else if(this.desde >=this.clientList[0].TOTAL){
    this.desde -= valor
  }
  this.loadClients();
  
}



  }
