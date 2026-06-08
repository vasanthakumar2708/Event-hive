import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiserviceService } from '../../../../service/apiservice.service';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { table } from 'console';
import { ReqtableComponent } from "./reqtable/reqtable.component";
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, TableComponent, ReqtableComponent, TableModule, FormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {


  // requirement = [
  //   { Item: 'Item 1', Quantity: '10' , amount:0},
  //   { Item: 'Item 2', Quantity: '20' , amount:0},
  //   { Item: 'Item 3', Quantity: '30' , amount:0},
  // ];

  totalAmount: number = 0;
  requirementTablelength: number = 0;
  calculateTotal(): void {
    this.totalAmount = this.requirement.reduce((sum: number, item: { amount: string; }) => sum + (parseFloat(item.amount) || 0), 0);
  }


  show: number = 1;
  selectedFile: File | null = null;
  advance_bill_amount: string | undefined;
  bill_amount: string | undefined;
  selectedOption: string | undefined;
  paidamount: String | undefined;
  content: String = '';
  quanity: String = '';
  price: String = '';
  table : string = 'req'

  itemlist: any[] = [];
  fetchdata(idx: number) {
    this.show = idx;
  }

  giveQuatation() {

    const body = {
      totalAmount:this.totalAmount,
      vendor_id : this.eventdata._id , 
      requirement : this.requirement
    }

    this.api.giverequirementquatation(body).subscribe((data)=>{
      console.log(data)
      if(data){
        window.location.reload()
      }
    })
    console.log(this.eventdata.event.requirement.food)

  }

  additem() {
    const item = {
      content: this.content,
      price: this.price,
      quantity: this.quanity,
    };
    this.itemlist.push(item);
    this.content = '';
    this.quanity = '';
    this.price = '';
  }

  detele(index: number) {
    this.itemlist.splice(index, 1);
  }

  billpaybtn() {
    this.loading = true;
    if (this.selectedFile === undefined) {
      alert('select a payment gateway');
      return;
    }
    if (this.paidamount === undefined) {
      alert('Enter amount');
      return;
    }

    if (
      Number(this.paidamount) >
      Number(this.eventdata.billamount - this.eventdata.billpaid)
    )
      alert('enter amount less the pending bill');
    const bill = {
      id: this.eventdata._id,
      amountpaid: this.paidamount,
      mode_of_payment: this.selectedOption,
    };

    this.api.updatepaymentbill(bill).subscribe((data) => {
      console.log(data);
      window.location.reload();
      this.loading = true;
    });

    // console.log(bill)
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.selectedFile = file ? file : null;
  }

  loading: boolean = false;

  constructor(private api: ApiserviceService) { }

  @Input() eventdata: any;
  @Input() user: any;
  requirement: any[] = [];

  ngOnChanges() {

    console.log(this.user.vendor_service)
    if (this.eventdata?.event?.requirement.food) {

      switch (this.user.vendor_service) {
        case "Food":
          this.requirement = this.eventdata.event.requirement.food;
          break;
        case "Entertain":
          this.requirement = this.eventdata.event.requirement.entertainment;
          break;
        case "Decor":
          this.requirement = this.eventdata.event.requirement.decor;
          break;
        case "Venue":
          this.requirement = this.eventdata.event.requirement.venue;
          break;

        default:
          break;
      }

      this.requirementTablelength = this.requirement.length


    }
  }
  
  updateStatus(phase: number, choice: boolean) {
    this.loading = true;
    const query = {
      phase: phase,
      choice: choice,
      vendor_id: this.eventdata._id,
    };

    this.api.updatePhasedata(query).subscribe((data) => {
      console.log(data);
      window.location.reload();
      this.loading = false;
    });
  }

  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      console.log('FormData contents:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      this.api.uploadfile(formData).subscribe(
        (data) => {
          console.log('File uploaded successfully:', data.body.file.filename);
          const filename = {
            vendor: this.eventdata,
            name: data.body.file.filename,
          };
          this.api.updatefilename(filename).subscribe((data) => {
            console.log(data);
          });
          this.updateStatus(1, true);
          this.updateStatus(2, true);
          window.location.reload();
          this.updatebill();
          this.loading = false;
        },
        (error) => {
          console.error('File upload failed:', error);
          this.loading = false;
        }
      );
    } else {
      console.log('No file selected.');
    }
  }

  updatebill() {
    const body = {
      bill: this.bill_amount,
      bill_advance: this.advance_bill_amount,
      vendor: this.eventdata,
    };
    this.api.updatebill(body).subscribe((data) => {
      console.log(data);
    });
  }

  addtable() {
    const body = {
      id: this.eventdata._id,
      table: this.itemlist
    };

    this.api.addreqtable(body).subscribe({
      next: (data) => {
        console.log(data);
        window.location.reload();
      },
    });
  }
}
