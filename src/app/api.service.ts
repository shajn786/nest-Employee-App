import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  addEmployee=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/addemp",datatosend)
  }

  userLogin=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/userlogin",datatosend)
  }
}
