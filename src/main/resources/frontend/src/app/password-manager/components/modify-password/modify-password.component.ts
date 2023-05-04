import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.css']
})
export class ModifyPasswordComponent implements OnInit {
  id:number;
  name:string;
  password:string;
  modifyPasswordForm= new FormGroup({
    'name': new FormControl(this.data.name,Validators.required),
    'password': new FormControl(this.data.password,[Validators.required])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private passwordService:PasswordService){
    this.id=this.data.id;
    this.name=this.data.name;
    this.password=this.data.password;
  }
  ngOnInit(): void {

  }

  modifyPassword(){
    this.passwordService.updatePassword(this.id,this.modifyPasswordForm.value).subscribe((res)=>{
      console.log("password updated");
    })
  }


}
