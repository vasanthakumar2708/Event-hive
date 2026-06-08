import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputOtpModule } from 'primeng/inputotp';
import { ApiserviceService } from '../../service/apiservice.service';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule, CommonModule, InputOtpModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  phone_no: string | undefined;
  password: string | undefined;
  errorMessage: string |undefined;
  usererror : boolean = false ;
  passworderror : boolean = false ;
  loading: boolean = false ;

  constructor(private api: ApiserviceService , private router : Router , private dataService :DataService) { }

  cancel() {
    this.loading = !this.loading
  }


  submit() {
    this.loading = true ;
    const data = {
      phone_no: this.phone_no,
      password: this.password
    };
  
    this.api.loginUser(data).subscribe({
      next: (res: any) => {
        // Handle successful response
        console.log(res.body.token);
    
        if (res.body.token) {
          localStorage.setItem('token', res.body.token);
          console.log("hi");
    
          // Decode the token
          const decodedToken = this.decodeToken(res.body.token);
          const userdata = {
            id: decodedToken._id
          };
          console.log(decodedToken.role);
    
          // Navigate based on the role
          if (decodedToken.role === 'vendor') {
            this.router.navigate(['/vendor']);
          } else {
            this.router.navigate(['/user']);
          }
        }
      },
      error: (err: any) => {
        // Handle error scenario
        console.error("Login failed", err);
        this.usererror  = false 
        this.passworderror  = false 
        // You can add specific error handling logic here
        if (err.status === 404) {
          this.errorMessage = 'Username not found';
          this.usererror = true
        } else if (err.status === 401) {
          this.errorMessage = 'Incorrect password';
          this.passworderror = true
        } else {
          this.errorMessage = 'An unknown error occurred. Please try again later.';
        }
        console.log(this.errorMessage)
        console.log(this.usererror)
      }
    });

    this.loading = false ;
    
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
