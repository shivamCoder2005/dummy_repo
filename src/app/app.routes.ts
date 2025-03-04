import { Routes, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';  // ✅ Import Router
import { LoginComponent } from './../auth/login/login.component';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.service';


const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated() ? true : router.parseUrl('/login');
  //return authService.isAuthenticated() ? true : inject(Router).navigate(['/login']);
};

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login' , pathMatch: 'full'} // Redirect unknown routes to login
];