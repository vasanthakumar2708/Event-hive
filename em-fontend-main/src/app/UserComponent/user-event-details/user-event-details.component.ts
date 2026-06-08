import { Component } from '@angular/core';
import { EventCardComponent } from "../../ui/event-card/event-card.component";

@Component({
  selector: 'app-user-event-details',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './user-event-details.component.html',
  styleUrl: './user-event-details.component.css'
})
export class UserEventDetailsComponent {

}
