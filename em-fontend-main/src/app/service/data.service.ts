import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Vendor{
  
  vendor_cname:string,
  vendor_contact:string
  vendor_location:string
  vendor_service:string
  _id:string
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private functionSubject = new Subject<void>();
  functionCalled$ = this.functionSubject.asObservable();

  callFunction() {
    this.functionSubject.next();
  }

  private venDetails: any  | undefined ;
  private userProfile : any | undefined ;

  setUserData(data :any ){
    this.userProfile = data;
  }
  getUserData(){
    return this.userProfile;
  }

  setVenDetails(data : any){
    this.venDetails  = data;
  }

  getVenDetails(){
    return this.venDetails
  }

  getFoodV(){
    return this.venDetails.food
  }
  getvenueV(){
    return this.venDetails.venue
  }
  getcatersV(){
    return this.venDetails.entertain
  }
  getdecorsV(){
    return this.venDetails.decor
  }

  decodeToken(token: any) {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }

  constructor() { }
}
