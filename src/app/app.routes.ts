
import { Routes, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';  // ✅ Import Router
import { LoginComponent } from './../auth/login/login.component';
import { HomeComponent } from '../home/home.component';
import { AuthService } from '../services/auth.service';
import { CreateEnvelopeComponent } from '../features/create-envelope/create-envelope.component';


const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated() ? true : router.parseUrl('/login');
  //return authService.isAuthenticated() ? true : inject(Router).navigate(['/login']);
};

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login' , pathMatch: 'full'}, // Redirect unknown routes to login
  { path: '**', redirectTo: '/login' } // Redirect unknown routes to login
  { path: 'home', component: HomeComponent },
  { path: 'createEnvelope', component: CreateEnvelopeComponent },
  { path: '', redirectTo: '/login' , pathMatch: 'full'} // Redirect unknown routes to login
import { Routes, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';  //  Import Router
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