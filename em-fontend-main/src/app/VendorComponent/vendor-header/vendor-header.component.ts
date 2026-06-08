import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-header',
  standalone: true,
  imports: [],
  templateUrl: './vendor-header.component.html',
  styleUrl: './vendor-header.component.css'
})
export class VendorHeaderComponent {

  logout(){
    
    localStorage.removeItem('token')
    window.location.reload()
  }

}
