import { Component, OnInit } from '@angular/core';
import {  TraerVinosService } from '../../shared/services/traer-vinos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wineList: any[] = [];

  constructor(private wine: TraerVinosService) {}

  ngOnInit(): void {    
    this.wine.getRandomWine()
    .subscribe((data: any) => {
      console.log('Aqui estan los vinos', data);
      this.wineList = data;
      
    });
  }

}
