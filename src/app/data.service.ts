import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  Vehicle(){
     return this.http.get('https://60bf32f197295a0017c4212e.mockapi.io/api/v1/vehicles')
  }
}
