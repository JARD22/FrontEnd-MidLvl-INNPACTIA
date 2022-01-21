import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {


  private url = environment.url

  get token():string{
    return sessionStorage.getItem('auth')
      }
      //HEADERS OPTIONS
      headerOptions: any = null;
    
      get headers(){
        return {headers:{
          'x-token': this.token
        }}
      }

  constructor(private http:HttpClient) {


   }

   newPhone(formData){
      return this.http.post(`${this.url}/phones`,formData,this.headers);
   }

   phoneList(id){
   return  this.http.get(`${this.url}/phones/${id}`,this.headers)
   }

}
