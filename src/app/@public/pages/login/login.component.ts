import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../@admin/services/usuario.service';
import { PersonService } from '../../../@admin/services/person.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {


  formEnviado:boolean =false;
  generos:any[]=[{desc:'Masculino'},{desc:'Femenino'},{desc:'No binario'},{desc:'Otro'},{desc:'Prefiero no decirlo'}]
      

  constructor(private usuarioService:UsuarioService,
              private personService:PersonService,
              private fb:FormBuilder,
              private router:Router) { }

  loginForm:FormGroup = this.fb.group({
    email:[''||localStorage.getItem('correo'),[Validators.required,Validators.email]],
    password:['',Validators.required],
    recordarme:[false]
  });


  registerForm:FormGroup= this.fb.group({
    name:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-záéíóúÁÉÍÓÚñÑ ]{2,25}$")]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.minLength(3)]],
    password:['',[Validators.required,,Validators.maxLength(25),Validators.minLength(8)]],
    password2:['',[Validators.required,,Validators.maxLength(25),Validators.minLength(8)]],
    gender:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-záéíóúÁÉÍÓÚñÑ ]{2,25}$")]],
  })

login(){
this.usuarioService.login(this.loginForm.value).subscribe((resp:any)=>{
  if (this.loginForm.get('recordarme').value){
    localStorage.setItem('correo',this.loginForm.get('usuario').value)
  }else{
    localStorage.removeItem('correo')
  }
  this.router.navigateByUrl('admin')
})
}  
  

register(){
 const IsinvalidPass= this.contrasenasDistintas();
this.formEnviado = true;

if (IsinvalidPass==true) {
  Swal.fire('Error','Contraseñas no son iguales','error');
  return
}

if (this.registerForm.valid && this.formEnviado && IsinvalidPass==false) {

  this.personService.newUser(this.registerForm.value).subscribe(
    (resp:any)=>{ Swal.fire('Hecho',resp.msg,'success')
    this.registerForm.reset();
    },(error:any)=>{
   
      Swal.fire('Error','No se pudo registrar el usuario','error');
    }

  )
}

console.log(this.registerForm.value);
}

contrasenasDistintas():boolean{
  const password1= this.registerForm.get('password').value
  const password2= this.registerForm.get('password2').value
  
  
  if((password1 !== password2) && this.formEnviado){
    return true;
  }else{
    return false;
  } 
}

campoNoValido(campo:string):boolean{
  if (this.registerForm.get(campo).invalid && this.formEnviado) {
    return true
  }else{
    return false
  }
}

}
