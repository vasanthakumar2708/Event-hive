import { Component, EventEmitter, Output } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { SocialIconComponent } from '../../ui/social-icon/social-icon.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { LoginVendorComponent } from "../../VendorComponent/login-vendor/login-vendor.component";
import { NewVendorComponent } from "../../VendorComponent/new-vendor/new-vendor.component";
import { UserLoginComponent } from '../../UserComponent/user-login/user-login.component';
import { NewUserComponent } from '../../UserComponent/new-user/new-user.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ SocialIconComponent, CommonModule, DialogModule, ButtonModule, InputTextModule, NewUserComponent, UserLoginComponent, LoginVendorComponent, NewVendorComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  visibleLoginUser: boolean =false;
  visibleLoginVendor: boolean =false;
  visibleNewVendor: boolean =false;

  showDialogLoginUser() {this.visibleLoginUser=true;}
  showDialogLoginVendor() {this.visibleLoginVendor=true;}
  showDialogNewVendor() {this.visibleNewVendor=true;}




  

  constructor(private router:Router){}


login() {
this.router.navigate(['/login'])
}
newuser() {
this.router.navigate(['/newuser'])
}
  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
