import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { StorageHelper } from '../helper/Storage-helper';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() currentPage: string = '';
  dropdownOpen = false;
  user: any = null; // Replace with dynamic user data


  constructor(private authService: AuthService, private router: Router, private storageHelper: StorageHelper) {
    this.user = storageHelper.getUserFromToken();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    this.authService.logout(); // Clear session
    this.router.navigate(['/login']); // Redirect to login page
  }
}