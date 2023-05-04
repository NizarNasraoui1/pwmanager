import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-add-password-popup',
  templateUrl: './add-password-popup.component.html',
  styleUrls: ['./add-password-popup.component.css']
})
export class AddPasswordPopupComponent {
  addPasswordForm= new FormGroup({
    'name': new FormControl(null,Validators.required),
    'password': new FormControl(null,[Validators.required])
  });

  constructor(private passwordService:PasswordService){

  }

  addPassword(){
    this.passwordService.addPassword(this.addPasswordForm.value).subscribe((res)=>{
      console.log("password updated");
    })
  }

}
