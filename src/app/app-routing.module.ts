import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearVinosComponent } from './core/crear-vinos/crear-vinos.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
//import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'login', component: LoginComponent},
  {path:'crear-vinos', component: CrearVinosComponent, canActivate:[AuthGuardService] },
  {path:'**',redirectTo: 'home'},
   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
