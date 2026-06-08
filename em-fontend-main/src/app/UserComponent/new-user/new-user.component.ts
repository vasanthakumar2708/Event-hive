import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from '../../service/apiservice.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {

  constructor(private api : ApiserviceService){}

  name!: string;
  email!: string;
  phone_no!: number;

  submit() {
    const data = {
      name: this.name,
      email: this.email,
      phone_no: this.phone_no,
    };

    this.api.newUser(data).subscribe((res) => {
      console.log(res)
      window.location.reload();
    })

    console.log(data);
  }
  visible: boolean = false;
}
