import { Routes } from '@angular/router';
import { MainComponent } from './LandingPage/main/main.component';
import { UserEventComponent } from './UserComponent/user-event/user-event.component';
import { UserAddEventComponent } from './UserComponent/user-add-event/user-add-event.component';
import { VendorHomeComponent } from './VendorComponent/vendor-home/vendor-home.component';
import { PastEventsComponent } from './VendorComponent/past-events/past-events.component';
import { NewEventsComponent } from './VendorComponent/new-events/new-events.component';
import { UserHomeComponent } from './UserComponent/user-home/user-home.component';
import { RoleGuard } from './service/authentication/role.guard';
import { Page404Component } from './LandingPage/page404/page404.component';

export const routes: Routes = [

  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { 
    path: 'main', component: MainComponent, 
  },
  
  {
    path: 'user', component: UserHomeComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'user' } ,
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: 'events', component: UserEventComponent },
      { path: 'addevents', component: UserAddEventComponent },
    ]
  },
  {
    path: 'vendor', component: VendorHomeComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'vendor' } ,
    children: [
      { path: '', redirectTo: 'newevents', pathMatch: 'full' },
      { path: 'newevents', component: NewEventsComponent },
      { path: 'events', component: PastEventsComponent },
    ]
  },
  { path: '**', component: Page404Component },



];
