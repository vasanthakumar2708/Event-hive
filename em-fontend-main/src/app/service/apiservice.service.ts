import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  // private url = environment.URL
  private url = 'http://localhost:8080/';

  constructor(private https : HttpClient) { }
  

  newVendor(data : any):Observable<HttpResponse<any>>{                                 // completed
    return this.https.post<any>(`${this.url}vendor/newvendor`, data , {observe:'response'});
  }

  loginVendor(data : any) : Observable<HttpResponse<any>>{                            //
    return this.https.post<any>(`${this.url}vendor/loginvendor`,data,{observe:'response'});
  }

  newUser(data : any):Observable<HttpResponse<any>>{                                   //
    return this.https.post<any>(`${this.url}user/newUser`, data , {observe:'response'});
  }

  loginUser(data : any):Observable<HttpResponse<any>>{                                 //
    return this.https.post<any>(`${this.url}user/loginUser`, data ,{observe:'response'});
  }
 

   
  getVendorList(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/getVendorList`, data ,{observe:'response'});
  }

  getUserDetails(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/getUserDetails`, data ,{observe:'response'});
  }

  getVendorDetails(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/getVendorDetails`, data ,{observe:'response'});
  }
  
  newEvent(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/newEvent`, data ,{observe:'response'});
  }

  getEventList(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/eventList`, data ,{observe:'response'});
  }
  
  getEventVendorList(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/getEventVendorList`, data ,{observe:'response'});
  }

  addreqtable(data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/addreqtable`, data ,{observe:'response'});
  }

  updatePhasedata (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/updatePhasedata`, data ,{observe:'response'});
  }

  updatefilename (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/updatefilename`, data ,{observe:'response'});
  }

  updatebill (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/updatebill`, data ,{observe:'response'});
  }

  updatepaymentbill (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/updatepaymentbill`, data ,{observe:'response'});
  }

  giverequirementquatation (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/giverequirementquatation`, data ,{observe:'response'});
  }

  update_payment_transaction (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}vendor/update_payment_transaction`, data ,{observe:'response'});
  }

  finaliseQuatation (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/finaliseQuatation`, data ,{observe:'response'});
  }
  getFinalVendorDetails (data : any):Observable<HttpResponse<any>>{
    return this.https.post<any>(`${this.url}user/getFinalVendorDetails`, data ,{observe:'response'});
  }


  downloadfile(filename: string): Observable<Blob> {
    console.log(filename)
    return this.https.get(`${this.url}vendor/download/${filename}`, {
        responseType: 'blob',
    });
}


  uploadfile(data: FormData): Observable<HttpResponse<any>> {
    console.log('FormData being sent:', data);
  
    return this.https.post<any>(`${this.url}vendor/upload`, data, {
      observe: 'response'  // Observing the full HTTP response
    });
  } 
  



 getEventListForVendorPage(data: any): Observable<HttpResponse<any>> {
  console.log("lof???")
  const params = new HttpParams({ fromObject: data });
  return this.https.get<any>(`${this.url}vendor/getEventListForVendorPage`, {
    params: params,
    observe: 'response'
  });

}

  


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
