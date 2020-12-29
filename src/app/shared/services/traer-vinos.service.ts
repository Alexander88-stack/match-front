import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TraerVinosService {

  wine = [];

  constructor(private http: HttpClient) { }

   getRandomWine() {

    return this.http.get('http://localhost:3000/wine')
   }
}
