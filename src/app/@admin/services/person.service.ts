import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

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


newUser(formData){

  return this.http.post(`${this.url}/users/new`,formData,this.headers);
}

newClient(formData){
  
  return this.http.post(`${this.url}/users/new-client`,formData,this.headers);
}

clientList(limit,offset){
  return this.http.get(`${this.url}/users/${limit}/${offset}`,this.headers)
}

}
