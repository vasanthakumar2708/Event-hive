import { Component } from '@angular/core';
import { EventCardComponent } from '../../ui/event-card/event-card.component';
import { DataService } from '../../service/data.service';
import { ApiserviceService } from '../../service/apiservice.service';
import { EventListComponent } from './event-list/event-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-events',
  standalone: true,
  imports: [CommonModule, EventCardComponent, EventListComponent],
  templateUrl: './new-events.component.html',
  styleUrl: './new-events.component.css'
})
export class NewEventsComponent {

  constructor(private dataservice: DataService, private api: ApiserviceService) { }
  userData: any | undefined;

  ViewTab : string  = "all";

  changeView(view : string){
    this.ViewTab = view;
  }

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
 