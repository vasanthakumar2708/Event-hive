import { Component, EventEmitter, Output } from '@angular/core';
import { VendorCardComponent } from '../vendor-card/vendor-card.component';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { DataService, Vendor } from '../../service/data.service';

@Component({
  selector: 'app-stepper-form',
  standalone: true,
  imports: [VendorCardComponent, StepperModule, ButtonModule, CommonModule],
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'] // Corrected styleUrl to styleUrls
})
export class StepperFormComponent {
  
  @Output() stepperEmitter = new EventEmitter<string>();

  Vendorname: string[] = [];

  veunecards: Vendor[] | undefined;
  catercards: Vendor[] | undefined;
  decorcards: Vendor[] | undefined;
  Entercards: Vendor[] | undefined;

 
  handleVendorAdded(name: string) {

    console.log("outer fomr :  ", name);


    if (!this.Vendorname.includes(name)) {
      this.Vendorname.push(name);
      console.log("Vendor added:", name);
      this.stepperEmitter.emit(name);
    }

  }

 

  constructor(private dataservice: DataService) { }

  

  ngOnInit(): void {
    this.dataservice.functionCalled$.subscribe(() => {
      this.veunecards = this.dataservice.getFoodV();
      this.catercards = this.dataservice.getcatersV();
      this.decorcards = this.dataservice.getdecorsV();
      this.Entercards = this.dataservice.getvenueV();
      console.log(this.Entercards)
    });
  }
}
