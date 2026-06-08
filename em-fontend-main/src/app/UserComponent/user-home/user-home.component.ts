import { Component } from '@angular/core';
import { UserSidebarComponent } from "../user-sidebar/user-sidebar.component";
import { UserContentComponent } from "../user-content/user-content.component";
import { VendorHeaderComponent } from "../../VendorComponent/vendor-header/vendor-header.component";

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [UserSidebarComponent, UserContentComponent, VendorHeaderComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {

}
