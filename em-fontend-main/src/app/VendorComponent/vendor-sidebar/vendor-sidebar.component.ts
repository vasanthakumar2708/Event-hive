import { Component } from '@angular/core';
import {ISidebar,AppdataService} from '../../service/appdata.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-vendor-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './vendor-sidebar.component.html',
  styleUrl: './vendor-sidebar.component.css'
})
export class VendorSidebarComponent {
  constructor(private appdata : AppdataService){}

  menus:ISidebar[] | undefined;

  ngOnInit(){
    this.menus=this.appdata.getVendorSiderbarData();
  }
}
