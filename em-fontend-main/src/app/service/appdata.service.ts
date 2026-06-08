import { Injectable } from '@angular/core';

export interface ISidebar {
  label:string,
  routerLink:string,
  icon:string
}

@Injectable({
  providedIn: 'root'
})



export class AppdataService {

  private userSideBar : ISidebar[]= [
    { label: 'My Events', routerLink: "/user/events", icon: ''  },
    { label: 'Add Events', routerLink: '/user/addevents', icon:'pi pi-calendar-plus'  },
    { label: 'Contacts', routerLink: '/' ,icon:'pi pi-user-plus'},
  ]
  private vendorSideBar : ISidebar[]= [
    { label: 'New Events', routerLink: "/vendor/newevents", icon: 'pi pi-chart-bar'  },
    { label: 'Past Events', routerLink: '/vendor/events', icon:'pi pi-calendar-plus'  },
    { label: 'Contacts', routerLink: '/' ,icon:'pi pi-user-plus'},
  ]

  constructor() { }

  getUserSiderbarData(){
    return this.userSideBar;
  }
  getVendorSiderbarData(){
    return this.vendorSideBar;
  }
}
