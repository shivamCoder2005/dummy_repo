<<<<<<< HEAD
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class StorageHelper {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      console.log("Token from LocalStorage - " + localStorage.getItem(key));
      return localStorage.getItem(key);
    }
    return null;
  }

  setItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
  
  getUserFromToken(): any {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getItem('token'); // Get token from localStorage
      if (!token) {
        return null; // No token found
      }

      try {
        const decoded: any = jwtDecode(token); // Decode JWT
        console.log("User information from Token - " + decoded.email + " " + decoded.username + " " + decoded.userId);
        return decoded; // Return decoded user details
      } catch (error) {
        console.error('Invalid token:', error);
        return null; // Return null if token is invalid
      }
    }
  }
}
=======
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class StorageHelper {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      console.log("Token from LocalStorage - " + localStorage.getItem(key));
      return localStorage.getItem(key);
    }
    return null;
  }

  setItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
  
  getUserFromToken(): any {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.getItem('token'); // Get token from localStorage
      if (!token) {
        return null; // No token found
      }

      try {
        const decoded: any = jwtDecode(token); // Decode JWT
        console.log("User information from Token - " + decoded.email + " " + decoded.username + " " + decoded.userId);
        return decoded; // Return decoded user details
      } catch (error) {
        console.error('Invalid token:', error);
        return null; // Return null if token is invalid
      }
    }
  }
}
>>>>>>> d0a8cfe (test 1)
