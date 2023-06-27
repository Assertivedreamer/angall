import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class SerService {

  private baseUrl="../../assets/data.json";

  constructor(private http:HttpClient) { }


getEmploy()
{


  return this.http.get(this.baseUrl)
}




}
