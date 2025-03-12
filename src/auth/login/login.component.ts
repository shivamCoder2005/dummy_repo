import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NavComponent } from '../../app/nav/nav.component';

@Component({
  selector: 'app-login',
  standalone: true,  // <-- Mark component as standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule, NavComponent] // <-- Add FormsModule here
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {
    if(this.authService.getToken()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe((res: any) => {
      this.authService.saveToken(res.token);
      console.log('logged in.');
      this.router.navigate(['/home']);  // Redirect to home after login
    }, error => {
      console.error('Login failed', error);
    });
  }
}