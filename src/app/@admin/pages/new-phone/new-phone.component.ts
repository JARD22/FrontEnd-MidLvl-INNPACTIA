import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PhonesService } from '../../services/phones.service';
import { Phone, PhoneResponse } from '../../../models/interfaces/phone.interface';

@Component({
  selector: 'app-new-phone',
  templateUrl: './new-phone.component.html',
 
})
export class NewPhoneComponent implements OnInit {

  phoneForm:FormGroup;
  formEnviado:boolean=false;
  phoneList:Phone[]=[];
  client_id:number;

  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              private phoneService:PhonesService) { }

  ngOnInit(): void {

    this.phoneForm = this.fb.group({
      clientID:['',Validators.required],
      company:['',[Validators.required,Validators.minLength(2),Validators.pattern("^[A-Za-záéíóúÁÉÍÓÚñÑ]{2,25}$")]],
      model:['',[Validators.required,Validators.maxLength(50)]],
      imei:['',[Validators.required,Validators.minLength(15)]]
    })

this.route.params.subscribe(({clientID})=>{
  this.phoneForm.patchValue({'clientID':clientID})
  this.client_id=clientID

  this.loadPhones();
})


  }

sendForm(){
  this.formEnviado= true
 if (this.phoneForm.valid && this.formEnviado) {
    this.phoneService.newPhone(this.phoneForm.value).subscribe(
      (resp:any)=>{
        Swal.fire('Hecho',resp.msg,'success');
        this.loadPhones();
      },(error:any)=>{
        Swal.fire('Error',error.error.msg,'error');
      }
    )
    this.formEnviado=false;
    this.phoneForm.reset();
 }

}


loadPhones(){
  this.phoneService.phoneList(this.client_id).subscribe(
    (resp:PhoneResponse)=>{
      this.phoneList = resp.phones;
     
    }
  )
}

campoNoValido(campo:string):boolean{
    if (this.phoneForm.get(campo).invalid && this.formEnviado) {
      return true
    }else{
      return false
    }
  }
}
