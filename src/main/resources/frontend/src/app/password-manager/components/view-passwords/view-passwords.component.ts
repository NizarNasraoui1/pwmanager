import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPasswordPopupComponent } from '../add-password-popup/add-password-popup.component';


export interface PasswordDto {
  id:number,
  name: string;
  password: string;
  rank: number;
}

const ELEMENT_DATA: PasswordDto[] = [
  {id: 1, name: 'name2', password: "123", rank: 2},
  {id: 2, name: 'name1', password: "123", rank: 1},

];
@Component({
  selector: 'app-view-passwords',
  templateUrl: './view-passwords.component.html',
  styleUrls: ['./view-passwords.component.css']
})



export class ViewPasswordsComponent {
  displayedColumns: string[] = ['name', 'password','up','down','modify'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog){

  }

  onUp(id:number){
    console.log(id)
  }

  onDown(id:number){
    console.log(id)
  }

  modifyPassword(id:number){
    console.log(id)
  }

  openAddPasswordPopup(enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(AddPasswordPopupComponent, {
      width: '40%',
      height:'40%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
