import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DialogComponent } from "./dialog/dialog.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [DialogModule, DialogComponent,CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  @Input() event: any
  @Input() user: any
  
  visibleEventDetails: any;

  showEventDetails() {
    this.visibleEventDetails = true
  }


}
