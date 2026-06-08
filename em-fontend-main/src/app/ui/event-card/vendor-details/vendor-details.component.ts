import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiserviceService } from '../../../service/apiservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './vendor-details.component.html',
  styleUrl: './vendor-details.component.css'
})
export class VendorDetailsComponent {

  billpaybtn() {
    // this.loading = true;
    
    if (this.paidamount === undefined) {
      alert('Enter amount');
      return;
    }

    if (
      Number(this.paidamount) >
      Number(this.vendorDetails.vendorEventDetails.billamount - this.vendorDetails.vendorEventDetails.billpaid)
    ){
      alert('enter amount less the pending bill');
      return
    }
    const bill = {
       id: this.vendorDetails.vendorEventDetails._id,
      amountpaid: this.paidamount,
      mode_of_payment: this.selectedOption,
    };

    console.log(this.vendorDetails.vendorEventDetails.billamount)
    console.log(this.vendorDetails.vendorEventDetails.billpaid)
    console.log(bill)

    this.api.updatepaymentbill(bill).subscribe((data) => {
      console.log(data);
      window.location.reload();
      // this.loading = true;
    });

    // console.log(bill)
  }

selectedOption: any;
paidamount: any;
submit() {
console.log(this.vendorDetails.vendorEventDetails.status[0])
}
 
  constructor(private api : ApiserviceService){}

  @Input() vendorDetails: any | undefined 

  download() {
        const filename = this.vendorDetails.vendorEventDetails[0].billfilename
        this.api.downloadfile(filename).subscribe((blob) =>
        {
          const downloadUrl = window.URL.createObjectURL(blob);
      
          // Create an anchor element and trigger the download
          const link = document.createElement('a');
          link.href = downloadUrl;
          link.download = filename; // Use the filename received from the backend
          link.click();

          // Clean up the URL object after the download
          window.URL.revokeObjectURL(downloadUrl);
        })
  }





  test(){
    console.log(this.vendorDetails.vendorEventDetails.billamount)
    console.log(this.vendorDetails.vendorEventDetails.billpaid)
  }
}
