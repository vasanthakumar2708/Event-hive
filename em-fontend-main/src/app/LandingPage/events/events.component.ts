import { Component } from '@angular/core';
import { CardsComponent } from '../../ui/cards/cards.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
