import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';

interface Ireq {
  Item: string;
  Quantity: number;
}

@Component({
  selector: 'app-requirement',
  standalone: true,
  imports: [FormsModule, CommonModule , TableModule],
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']  // Corrected styleUrls
})
export class RequirementComponent {

  @Output() messageEvent = new EventEmitter<any>();



onSubmit() {
const requirement = {
  food : this.food,
  venue : this.venue,
  entertainment : this.entertainment,
  other : this.other,
  decor : this.decor
}

this.messageEvent.emit(requirement);

}

  deleteItem(index: number) {
    switch (this.currentView) {
      case 'food':
        this.food.splice(index, 1);
        break;
      case 'venue':
        this.venue.splice(index, 1);
        break;
      case 'decor':
        this.decor.splice(index, 1);
        break;
      case 'other':
        this.other.splice(index, 1);
        break;
      case 'entertainment':
        this.entertainment.splice(index, 1);
        break;
      default:
        console.error('Invalid domain');
    }
  
}


  food: Ireq[] = [];
  venue: Ireq[] = [];
  decor: Ireq[] = [];
  other: Ireq[] = [];
  entertainment: Ireq[] = [];

  foodmode: boolean = true;
  venuemode: boolean = false;
  decormode: boolean = false;
  entertainmentmode: boolean = false;
  othermode: boolean = false;
  currentView: string = 'food';

  quantity: number | undefined;
  item: string | undefined;


  changeview(domain: string) {

    this.foodmode = false;
    this.venuemode = false;
    this.decormode = false;
    this.entertainmentmode = false;
    this.othermode = false;

    switch (domain) {
      case 'food':
        this.foodmode = true;
        this.currentView = 'food';
        break;
      case 'venue':
        this.venuemode = true;
        this.currentView = 'venue';
        break;
      case 'decor':
        this.decormode = true;
        this.currentView = 'decor';
        break;
      case 'other':
        this.othermode = true;
        this.currentView = 'other';
        break;
      case 'entertainment':
        this.entertainmentmode = true;
        this.currentView = 'entertainment';
        break;
      default:
        console.error('Invalid domain');
    }

  }


  additem(domain: string) {

    if (this.item && this.quantity) {
      const newItem = { Item: this.item, Quantity: this.quantity };
      switch (domain) {
        case 'food':
          this.food.push(newItem);
          break;
        case 'venue':
          this.venue.push(newItem);
          break;
        case 'decor':
          this.decor.push(newItem);
          break;
        case 'other':
          this.other.push(newItem);
          break;
        case 'entertainment':
          this.entertainment.push(newItem);
          break;
        default:
          console.error('Invalid domain');
      }
      // Reset after adding
      this.item = undefined;
      this.quantity = undefined;

    } else {
      console.error('Item and Quantity must be provided');
    }
  }
}
