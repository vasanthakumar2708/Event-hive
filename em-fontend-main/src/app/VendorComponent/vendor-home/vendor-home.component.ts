import { Component } from '@angular/core';
import { VendorHeaderComponent } from "../vendor-header/vendor-header.component";
import { VendorSidebarComponent } from "../vendor-sidebar/vendor-sidebar.component";
import { VendorContentComponent } from "../vendor-content/vendor-content.component";

interface IVendorDetails { 
  name : string
  past_events : string
}

@Component({
  selector: 'app-vendor-home',
  standalone: true,
  imports: [VendorHeaderComponent, VendorSidebarComponent, VendorContentComponent],
  templateUrl: './vendor-home.component.html',
  styleUrl: './vendor-home.component.css'
})
export class VendorHomeComponent {



  ngOnIt(){

  }
}
