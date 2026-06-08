import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiserviceService } from '../../service/apiservice.service';
import { DataService } from '../../service/data.service';
import { EventListComponent } from "../new-events/event-list/event-list.component";

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [CommonModule, EventListComponent],
  templateUrl: './past-events.component.html',
  styleUrl: './past-events.component.css'
})
export class PastEventsComponent {

  constructor(private dataservice: DataService, private api: ApiserviceService) { }
  userData: any | undefined;

  eventlist : any

  ngOnInit() {
    const token = localStorage.getItem('token');
    const decodeToken = this.dataservice.decodeToken(token)

    console.log(decodeToken)
    const body = {
      id: decodeToken._id
    }
    this.api.getVendorDetails(body).subscribe((data) => {
      console.log(data.body)
      this.userData = data.body;
    })
    this.api.getEventListForVendorPage(body).subscribe((data) => {
      this.eventlist = data.body
      console.log(this.eventlist)
      
    })

  }

}
