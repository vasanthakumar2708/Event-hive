import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './LandingPage/events/events.component';
import { VendorHomeComponent } from "./VendorComponent/vendor-home/vendor-home.component";
import { NewUserComponent } from "./UserComponent/new-user/new-user.component";
import { HomeComponent } from './LandingPage/home/home.component';
import { NavComponent } from './ui/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavComponent,  EventsComponent, VendorHomeComponent, NewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-m';
}
