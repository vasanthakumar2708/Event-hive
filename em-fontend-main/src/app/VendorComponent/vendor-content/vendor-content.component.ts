import { Component } from '@angular/core';
import { StepperFormComponent } from "../../ui/stepper-form/stepper-form.component";
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-vendor-content',
  standalone: true,
  imports: [StepperFormComponent, RouterOutlet],
  templateUrl: './vendor-content.component.html',
  styleUrl: './vendor-content.component.css'
})
export class VendorContentComponent {

}
