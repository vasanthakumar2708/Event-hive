import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NewVendorComponent } from "../../VendorComponent/new-vendor/new-vendor.component";
import { DialogModule } from 'primeng/dialog';
import { UserEventDetailsComponent } from "../../UserComponent/user-event-details/user-event-details.component";
import { EventCardComponent } from "../event-card/event-card.component";
import { ApiserviceService } from '../../service/apiservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NewVendorComponent, DialogModule, UserEventDetailsComponent, EventCardComponent,CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  constructor(private api : ApiserviceService){}

  @Input() event: any;
  badge : number = 1

  vendorlist : any
  vendata : any
  visibleEventDetails: boolean = false;

  showEventDetails() {
    this.badge = 0
    this.visibleEventDetails=true;
    // this.vendata= this.event
    console.log("ecent list")
   console.log(this.event) 

   const list = {
    list:this.event
  }

  //  this.api.getEventVendorList(list).subscribe((data) => {

  //    this.vendorlist=data.body
  //    console.log("data",this.vendorlist)
     
  //  })
  }

}
