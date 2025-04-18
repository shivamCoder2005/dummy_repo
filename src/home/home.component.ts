import { Component, ViewContainerRef, ComponentFactoryResolver, Type, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

// Import Components for Dynamic Switching

import { CreateEnvelopeComponent } from '../features/create-envelope/create-envelope.component';
import { ManageEnvelopesComponent } from '../features/manage-envelopes/manage-envelopes.component';
import { TemplatesComponent } from '../features/templates/templates.component';
import { AdminComponent } from '../features/admin/admin.component';
import { UserManagementComponent } from '../features/adminFeatures/user-management/user-management.component';
import { SecurityComponent } from '../features/adminFeatures/security/security.component';
import { BillingComponent } from '../features/adminFeatures/billing/billing.component';
import { NavComponent } from '../app/nav/nav.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NavComponent]
})
export class HomeComponent implements OnInit {
  activeComponent: Type<any> | null = null;
  activeComponentTitle: string = 'Home';
  userType: string | null = null; // Store userType
  isAdmin = false;
  isAdminView = false;



  // Define Cards
  userCards = [
    { title: 'Create Envelope', description: 'Start a new document signing request.', icon: 'fas fa-file-signature', url: "/createEnvelope" },
    { title: 'Manage Envelopes', description: 'View and manage sent envelopes.', icon: 'fas fa-folder-open',url: "/createEnvelope"},
    { title: 'Templates', description: 'Save document templates for quick access.', icon: 'fas fa-clone',url: "/createEnvelope"},
  ];

  adminCards = [
    { title: 'User Management', description: 'Manage organization users & roles.', icon: 'fas fa-users-cog' },
    { title: 'Security & Compliance', description: 'Configure security policies & MFA.', icon: 'fas fa-lock' },
    { title: 'Billing & Subscription', description: 'Manage payment plans & invoices.', icon: 'fas fa-credit-card' }
  ];

  constructor(private authService: AuthService, private router: Router) {

  }


  ngOnInit(): void {
    //  Subscribe to the Observable and store userType
    this.authService.getUserType().subscribe({
      next: (type) => {
        this.userType = type;
        this.isAdmin = this.userType === 'admin';
        console.log("isAdmin -> " + this.isAdmin);
        console.log("UserType -> " + this.userType);
      },
      error: (err) => {
        console.error('Error fetching user type:', err);
      }
    });
  }

  // Logout Function
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Set Active Component when a card is clicked
  setActiveComponent(url: string) {
    this.router.navigate([url]);
  }

  // getComponentTitle(component: any): string {
  //   const titles: { [key: string]: string } = {
  //     CreateEnvelopeComponent: 'Create Envelope',
  //     ManageEnvelopesComponent: 'Manage Envelopes',
  //     TemplatesComponent: 'Templates'
  //   };
  //   return titles[component.constructor.name] || '';
  // }

  // // Back to Home (Restore Cards View)
  // goBack() {
  //   this.activeComponent = null;
  // }
}
