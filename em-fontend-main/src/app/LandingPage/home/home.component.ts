import { Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet } from '@angular/router';
import { NewUserComponent } from '../../UserComponent/new-user/new-user.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, NewUserComponent,RouterOutlet],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visibleNewUser: boolean =false;
  visibleLoginUser: boolean =false;

  showDialogNewUser() {this.visibleNewUser=true;}
  showDialogLoginUser() {this.visibleLoginUser=true;}

  totalevent = 14
  totaluser = 9
  totalvendor = 10

  
  
}
