import { Component } from '@angular/core';
import { AppdataService, ISidebar } from '../../service/appdata.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],

  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css'
})
export class UserSidebarComponent {
  constructor(private appdata : AppdataService){}

  menus:ISidebar[] | undefined;

  ngOnInit(){
    this.menus=this.appdata.getUserSiderbarData();
  }
}
