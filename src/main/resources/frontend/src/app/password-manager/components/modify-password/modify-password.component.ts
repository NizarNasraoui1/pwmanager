import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.css']
})
export class ModifyPasswordComponent implements OnInit {
  id:number;
  name:string;
  password:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    this.id=this.data.id;
    this.name=this.data.name;
    this.password=this.data.password;
  }
  ngOnInit(): void {
    console.log(this.data);
  }


}
