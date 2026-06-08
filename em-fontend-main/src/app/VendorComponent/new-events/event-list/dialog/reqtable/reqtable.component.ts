import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reqtable',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './reqtable.component.html',
  styleUrl: './reqtable.component.css'
})
export class ReqtableComponent {
@Input() reqtable: any[] = []
  

}
