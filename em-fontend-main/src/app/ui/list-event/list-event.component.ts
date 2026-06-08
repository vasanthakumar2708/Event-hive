import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {

  @Input() vendorName: string | undefined;
  @Input() vendorDetails: any | undefined;
  @Output() dataEmitter = new EventEmitter<string>();
  status: any;
  
  vendetails() {
    //  alert(this.vendorName)
    
  this.sendData()
  }

  sendData() {
    this.dataEmitter.emit(this.vendorName);
  }
}
