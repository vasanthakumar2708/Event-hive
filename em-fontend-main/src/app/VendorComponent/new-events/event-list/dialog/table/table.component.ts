import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ApiserviceService } from '../../../../../service/apiservice.service';
import { isBuffer } from 'node:util';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {

  @Input() paymentable :  any[] = [] ;
  @Input() vendata :  any  ;


constructor(private api : ApiserviceService){}

updatedata(option:string,idx : number) {

  const body = {
    option : option,
    index : idx,
    _id : this.vendata._id
  }

  this.api.update_payment_transaction(body).subscribe((data)=> {

    
    console.log(data)
  
    if(data){
      window.location.reload()
    }

  })
  


}

}
