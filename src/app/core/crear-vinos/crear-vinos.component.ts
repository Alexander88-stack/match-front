import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrearVinoService } from '../../shared/services/crear-vino.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-vinos',
  templateUrl: './crear-vinos.component.html',
  styleUrls: ['./crear-vinos.component.css']
})


export class CrearVinosComponent implements OnInit {

  postId: any[] = [];
  bodegaProveniente:any  [] = [];
      nombreVino:any [] = [];
      caracteristicas:any [] = [];
      archivo:any [] = [];


  forma!: FormGroup;


  constructor(private wine: CrearVinoService, private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.createForm();
  };

  createForm(): void {
    this.forma = this.fb.group({
      bodegaProveniente: [''],
      nombreVino: [''],
      caracteristicas: [''],
      archivo: ['']
    });
  }

  saveForm(): void {
    console.log(this.forma);// le tengo que pasar los datos que tiene que guardar
    
    this.http.post<any> ('http://localhost:3000/wine', { 
        bodegaProveniente: this.forma.value.bodegaProveniente,
        nombreVino: this.forma.value.nombreVino,
        caracteristicas: this.forma.value.caracteristicas,
        archivo: this.forma.value.archivo
      }, { headers: {
        'Content-Type': 'application/json'
      }}).subscribe(data => {
        console.log('La respuesta es', data);
        
            this.postId = data
            
    });
  }


}
