import { Component } from '@angular/core';
import { EventsComponent } from "../events/events.component";
import { HomeComponent } from "../home/home.component"
import { NavComponent } from '../../ui/nav/nav.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EventsComponent, HomeComponent, NavComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
