import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log!: FormGroup;
  user: UserModel = new UserModel();
  postId: any [] = [];

  constructor(private fb: FormBuilder, private router: Router,private http: HttpClient ) { }

  ngOnInit(): void {
    this.createForm();
  }

  // login(log: NgForm) {
  //   const loginResult = this.data.login(this.user);
  //   if (loginResult) {
  //     this.router.navigateByUrl('/crear-vinos');
  //   }else {
  //     alert('Intentalo de nuevo')
  //   }
  // }

  createForm(): void {
    this.log = this.fb.group({
      email: ['',[Validators.required,Validators.minLength(3)]],
      contrasena: ['',[Validators.required]]
    });
  }

  saveForm(): void {
    console.log(this.log);

    this.http.post<any>('http://localhost:3000/user/signup', {
      email: this.log.value.email,
      contrasena: this.log.value.contrasena
    },{ headers : {
      'Content-Type': 'application/json'
    }}).subscribe(data => {
        console.log('La respuesta es', data);

        localStorage.setItem('token', data.token);  
        this.postId = data;

        this.router.navigateByUrl('/crear-vinos');
    })

    
    
  }

}
