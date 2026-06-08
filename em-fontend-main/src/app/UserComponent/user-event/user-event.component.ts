import { Component } from '@angular/core';
import { EventCardComponent } from '../../ui/event-card/event-card.component';
import { DataService } from '../../service/data.service';
import { ApiserviceService } from '../../service/apiservice.service';
import { EventListComponent } from "../../ui/event-list/event-list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-event',
  standalone: true,
  imports: [EventCardComponent, EventListComponent,CommonModule],
  templateUrl: './user-event.component.html',
  styleUrl: './user-event.component.css'
})
export class UserEventComponent {

  constructor(private dataservice : DataService , private api :ApiserviceService){}

  userData : any | undefined ;
  eventList : any | undefined ;
  noEventLogo : boolean = false;

  tezt(){
    console.log(this.eventList);
  }
  arr = [1,2,3,5]
  ngOnInit(){
    const token = localStorage.getItem('token');
    const decodeToken = this.dataservice.decodeToken(token)

    console.log(decodeToken)
   const body = {
    id : decodeToken._id
   }

    this.api.getUserDetails(body).subscribe((data) => {
      console.log(data.body)
      this.userData = data.body;
      console.log(this.userData.name)
      console.log(this.userData.phone)
      console.log(this.userData.email)
    })

    this.api.getEventList(body).subscribe((data) => {
      console.log('Event list received')
      this.eventList = data.body.events;
      console.log(this.eventList)
      if(this.eventList==0){
        this.noEventLogo = true
      }
    })

  

  }

}
