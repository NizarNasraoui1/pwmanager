import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username:string;
  password:string;

  constructor(private authService:AuthService){

  }

  register(){
    this.authService.register(this.username,this.password).subscribe((res)=>{
      console.log("registred");
    })
  }

}
