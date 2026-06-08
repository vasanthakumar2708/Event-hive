import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListEventComponent } from "../../ui/list-event/list-event.component";
import { VendorDetailsComponent } from "./vendor-details/vendor-details.component";
import { ApiserviceService } from '../../service/apiservice.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface IVenDetails {
  v_service :string
  v_name : string ,
  v_email :string ,
  v_phone :string ,
  v_location : string ,
  event_status : boolean[]
}

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [ListEventComponent, VendorDetailsComponent , CommonModule , TableModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnChanges{


viewVendordetials(vendor: string) {
  switch  (vendor) {
    case this.venList[0].vendorDetails.vendor_service:
      this.vendetails = this.venList[0]
      this.viewReqtable = this.venList[0].vendorEventDetails.requirementTable
      break
    case this.venList[1].vendorDetails.vendor_service:
      this.vendetails = this.venList[1]
      this.viewReqtable = this.venList[1].vendorEventDetails.requirementTable
      break
    case this.venList[2].vendorDetails.vendor_service:
      this.vendetails = this.venList[2]
      this.viewReqtable = this.venList[2].vendorEventDetails.requirementTable
      break
    case this.venList[3].vendorDetails.vendor_service:
      this.vendetails = this.venList[3]
      this.viewReqtable = this.venList[3].vendorEventDetails.requirementTable
      break
  
  }  
  // console.log("TABLE VIEW == > " , this.venList[0].vendorEventDetails.requirementTable)
}
  
  finalisevendorList() {
    // if (
    //   this.finaliseFoodvendor === undefined ||
    //   this.finaliseDecorvendor === undefined ||
    //   this.finaliseEntertainvendor === undefined ||
    //   this.finaliseVenuevendor === undefined
    // ) {
    //   alert("Please select all vendors");
    //   return;
    // }
    
    const body = {
      event_id:this.event._id,
      allvendorList : this.event.VendorList,
      food: this.finaliseFoodvendor,
      decor: this.finaliseDecorvendor,
      entertain: this.finaliseEntertainvendor,
      venue: this.finaliseVenuevendor
    };
  
    this.api.finaliseQuatation(body).subscribe((data)=>{
      if(data.status == 200){
        alert("Quatation Finalised");
        window.location.reload()
      }
    })

    console.log(body);
  }
  

  finaliseFoodvendor :string | undefined
  finaliseEntertainvendor :string | undefined
  finaliseDecorvendor :string | undefined
  finaliseVenuevendor :string | undefined

finalisevendor(idx: number) {

const vendorType = this.venList[idx].vendorDetails.vendor_service

  switch  (vendorType) {

  case "Food":
    this.finaliseFoodvendor = this.venList[idx].vendorDetails._id
    break
  case "Decor":
    this.finaliseDecorvendor = this.venList[idx].vendorDetails._id
    break
  case "Entertainment":
    this.finaliseEntertainvendor = this.venList[idx].vendorDetails._id
    break
  case "Venue":
    this.finaliseVenuevendor = this.venList[idx].vendorDetails._id
    break
}  


}

  tempevent : any
  @Input() event :any 

  constructor(private api :ApiserviceService){}


   viewReqtable : [] = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes['event']) {
      console.log('Event updated:', this.event);
      this.updateTempEvent();
    }
  }

  private updateTempEvent() {
   this.tempevent = this.event
    this.fetchVendorList();
  }
  
 

  venList :any
  receiveData(data: string) {
    console.log(data)
    console.log(this.venList)
    if(data == "Venue")this.vendetails = this.venList[3]
    if(data == "Food")this.vendetails = this.venList[0]
    if(data == "Decor")this.vendetails = this.venList[2]
    if(data == "Entertainment")this.vendetails = this.venList[1]
  }
  
  vendetails : any | undefined ;

  fetchVendorList(){

      const list = {
        list : this.event
      }

      if(this.event.userEventStatus == 'quatationPending'){
        this.api.getEventVendorList(list).subscribe((data) => {
          const temp =data.body
          this.venList = data.body
          this.vendetails = this.venList[0]
          this.viewReqtable = temp[0].vendorEventDetails.requirementTable
      
         console.log("EVENT === >",this.event)
        })
        
      }

     
     
      
      if(this.event.userEventStatus == 'quatationsubmitted'){
        const body = {
          id : this.event._id
        }
        this.api.getFinalVendorDetails(body).subscribe((data)=>{
           this.venList = data.body
           this.vendetails = this.venList[0]
          console.log("FINALISED DATA+++++++++++++++++++++++++")
          console.log(this.venList)
        })
      }
        



}




viewtable(idx: number) {
  // console.log(this.venList[idx])
  this.viewReqtable = this.venList[idx].vendorEventDetails[0].requirementTable
  }
  


}
