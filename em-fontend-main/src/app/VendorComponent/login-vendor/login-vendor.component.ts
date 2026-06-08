import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-vendor.component.html',
  styleUrl: './login-vendor.component.css',
})
export class LoginVendorComponent {
  usererror: boolean = false;
  passworderror: boolean = false ;
  errorMessage: string | undefined;
loading: boolean  = false;


  constructor(private api: ApiserviceService , private router : Router) {}

  password: string | undefined;
  phone_no: string | undefined;

  cancel() {
    this.loading = !this.loading
  }

  submit() {
  const data = {
    vendor_phone_no: this.phone_no,
    vendor_password: this.password
  };

  this.api.loginVendor(data).subscribe({
    next: (res) => {
      const body = res.body; // extract body safely

      if (body && body.token) {
        localStorage.setItem("token", body.token);

        const decoded = this.decodeToken(body.token);

        if (decoded.role === "vendor") {
          this.router.navigate(['/vendor']);
        } else {
          this.router.navigate(['/user']);
        }
      }
    },

    error: (err) => {
      console.error("Login failed", err);
      this.usererror  = false;
      this.passworderror = false;

      if (err.status === 404) {
        this.errorMessage = 'Username not found';
        this.usererror = true;
      } else if (err.status === 401) {
        this.errorMessage = 'Incorrect password';
        this.passworderror = true;
      } else {
        this.errorMessage = 'Something went wrong.';
      }
    }
  });
}


  decodeToken(token: string) {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }

}
