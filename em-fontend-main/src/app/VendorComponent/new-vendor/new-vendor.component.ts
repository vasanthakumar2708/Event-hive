import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-vendor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-vendor.component.html',
  styleUrl: './new-vendor.component.css'
})
export class NewVendorComponent {

  constructor(private api: ApiserviceService) {}

  // Dropdown options
  serviceList = ["Food", "Decor", "Entertainment", "Venue"];

  // Form fields
  name: string | undefined;
  email: string | undefined;
  phone_no: string | undefined;
  location: string | undefined;
  pincode: string | undefined;
  c_name: string | undefined;
  service: string | undefined;
  password: string | undefined;

  submit() {

    const newVendor = {
      vendor_name: this.name,
      vendor_email: this.email,
      vendor_service: this.service,
      vendor_location: this.location,
      vendor_contact: this.phone_no,
      vendor_cname: this.c_name,
      vendor_pincode: this.pincode,
      vendor_password: this.password,
      doj: new Date().toISOString().slice(0, 10)
    };

    console.log("Sending to backend: ", newVendor);

    this.api.newVendor(newVendor).subscribe(
      (res) => {
        console.log("Server response:", res);
        window.location.reload();
      },
      (err) => {
        console.error("Error:", err);
      }
    );
  }
}
