import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearVinoService {

  newWine = [];

  constructor(private http: HttpClient) { }
   postRandomNewWine() {

    return  this.http.post.bind('http://localhost:3000/wine' )
   }
}
