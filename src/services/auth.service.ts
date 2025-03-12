<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { StorageHelper } from '../app/helper/Storage-helper';
import Constants from '../app/helper/Constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = this.getBaseUrl + '/api/auth';  // Update as needed

  constructor(private storageHelper: StorageHelper, private http: HttpClient, private constants: Constants) {}
  //Test
  getBaseUrl (): String {
    return this.constants.getBaseURL();
  }

  // Login Function (Sends request to backend)
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/token`, { email, password });
  }



  //  Fetch UserType from backend
  getUserType(): Observable<string> {
    // Simple method but might crash as sometimes, there won't be any value in the token.
    //const token = localStorage.getItem('token'); // Get token from localStorage
    
    //below method will not crash and will work on Angular Client side Rendering as well as Server side Rendering.
    const token = this.storageHelper.getItem('token') || '';
    if (!token || token == '') {
      console.error('In getUserType - No token found! User is not authenticated.');
      return new Observable(observer => observer.error('No token found'));
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Pass token in headers
    });
    return this.http.get<{ userType: string }>(`${this.baseUrl}/userType`, { headers }).pipe(map(response => response.userType)); // Extract userType from response
  }



  //  Set UserType (Only Admins can call this)
  setUserType(userId: string, userType: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/setUserType/${userId}`, { userType });
  }



  // Store JWT Token
  saveToken(token: string): void {
    this.storageHelper.setItem('token', token);
  }



  // Retrieve JWT Token
  getToken(): string | null {
    return this.storageHelper.getItem('token') || '';
  }



  // Check if User is Authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }



  // Logout Function
  logout(): void {
    this.storageHelper.removeItem('token');
  }
}
=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { StorageHelper } from '../app/helper/Storage-helper';
import Constants from '../app/helper/Constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = '';  // Update as needed

  constructor(private storageHelper: StorageHelper, private http: HttpClient, private constants: Constants) {
    // this.baseUrl = `${this.getBaseUrl}/api/auth`;
    this.baseUrl = `/api/auth`;
    // http://localhost:5000/api/auth/
  }

  // getBaseUrl (): String {
  //   return this.constants.getBaseURL();
  // }

  // Login Function (Sends request to backend)
  login(email: string, password: string): Observable<any> {
    console.log(`URL - ${this.baseUrl}/token`);
    return this.http.post(`${this.baseUrl}/token`, { email, password });
  }



  //  Fetch UserType from backend
  getUserType(): Observable<string> {
    // Simple method but might crash as sometimes, there won't be any value in the token.
    //const token = localStorage.getItem('token'); // Get token from localStorage
    
    //below method will not crash and will work on Angular Client side Rendering as well as Server side Rendering.
    const token = this.storageHelper.getItem('token') || '';
    if (!token || token == '') {
      console.error('In getUserType - No token found! User is not authenticated.');
      return new Observable(observer => observer.error('No token found'));
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Pass token in headers
    });
    return this.http.get<{ userType: string }>(`${this.baseUrl}/userType`, { headers }).pipe(map(response => response.userType)); // Extract userType from response
  }



  //  Set UserType (Only Admins can call this)
  setUserType(userId: string, userType: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/setUserType/${userId}`, { userType });
  }



  // Store JWT Token
  saveToken(token: string): void {
    this.storageHelper.setItem('token', token);
  }



  // Retrieve JWT Token
  getToken(): string | null {
    return this.storageHelper.getItem('token') || '';
  }



  // Check if User is Authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }



  // Logout Function
  logout(): void {
    this.storageHelper.removeItem('token');
  }
}
>>>>>>> d0a8cfe (test 1)
