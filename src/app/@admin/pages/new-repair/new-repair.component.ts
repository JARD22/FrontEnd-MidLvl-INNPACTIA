import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../../services/phones.service';
import { Reparaciones } from '../../../models/interfaces/reparaciones.interface';
import { ReparacionesService } from '../../services/reparaciones.service';
import { RepairPhone  } from '../../../models/interfaces/repairPhone.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-repair',
  templateUrl: './new-repair.component.html'
})
export class NewRepairComponent implements OnInit {

  repairForm:FormGroup;
  repairList:RepairPhone[]=[];
  id_phone:number;
  formEnviado:boolean = false;
  minDate:string = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`

  constructor(private fb:FormBuilder,
    private route:ActivatedRoute,
    private phoneService:PhonesService,
    private reparacionesService:ReparacionesService) { }

  ngOnInit(): void {


    this.repairForm = this.fb.group({
      phoneID:['',Validators.required],
      description:['',[Validators.required,Validators.maxLength(200),Validators.pattern('^[ A-Z a-z 0-9 . _ % + - , ; # ÁÉÍÓÚáéíóúÑñ()]{2,300}$')]],
      initDate:['',Validators.required]
    });

    this.route.params.subscribe(({phoneID})=>{
     
      this.repairForm.patchValue({'phoneID':phoneID})
      this.id_phone=phoneID});

this.loadRepairs();
  }


sendForm(){
this.formEnviado=true

 if (this.repairForm.valid && this.formEnviado) {
   this.reparacionesService.newRepair(this.repairForm.value).subscribe(
     (resp:any)=>{
       Swal.fire('Hecho',resp.msg,'success')
       this.repairForm.reset()
       this.formEnviado=false
       this.loadRepairs();
     },(error)=>{
      Swal.fire('Hecho',error.error.msg,'success')
     }
   )
 }
}

campoNoValido(campo:string):boolean{
  if (this.repairForm.get(campo).invalid && this.formEnviado) {
    return true
  }else{
    return false
  }
}

loadRepairs(){
  this.reparacionesService.rpp(this.id_phone).subscribe(
    (resp:any)=>{
      this.repairList= resp.data
    }
  )
}
}
