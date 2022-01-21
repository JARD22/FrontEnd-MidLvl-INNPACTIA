import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReparacionesService {

  constructor(private http:HttpClient) { }

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

reparaciones(limit,offset){
  return this.http.get(`${this.url}/reparaciones/${offset}/${limit}`,this.headers)
}

newRepair(formData){
  return this.http.post(`${this.url}/reparaciones/`,formData,this.headers)
}

rpp(id){
  return this.http.get(`${this.url}/reparaciones/${id}`,this.headers);
}

}
