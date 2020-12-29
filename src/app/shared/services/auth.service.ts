import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from '../../models/user.model';
@Injectable({
  providedIn: 'root'
})


export class AuthService {

    
  constructor() { }

    // login ( user: UserModel ) {

    //     if (user.email === 'alexandrumarianghidigeanu@yahoo.es' && user.contraseña === '12345678' ) {
    //         localStorage.setItem('data', 'true');
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

    // isData(): boolean {
    //     if (localStorage.getItem('data')=== 'true') {
    //         return true;
    //     }else {
    //         return false;
    //     }
    // }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    if(token) {
        return true;
    } else {
        return false;
    }

    // return !this.jwtHelper.isTokenExpired(token);
  }
}
