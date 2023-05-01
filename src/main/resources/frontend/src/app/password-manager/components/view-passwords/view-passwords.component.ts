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
  {id: 1, name: 'name1', password: "123", rank: 1},
  {id: 2, name: 'name2', password: "123", rank: 2},
  {id: 3, name: 'name3', password: "123", rank: 3},
  {id: 4, name: 'name4', password: "123", rank: 4}

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
    let rank=this.getRank(id);
    console.log(rank)
    if(rank>1){
      var rowToUp=this.dataSource.find((e)=>e.rank==rank);
      var rowToDown=this.dataSource.find((e)=>e.rank==rank-1);
      rowToUp!.rank=rank-1;
      rowToDown!.rank=rank;
      this.dataSource=[...this.sortArrrayByRank(this.dataSource)];
    }


  }

  onDown(id:number){
    let rank=this.dataSource.find((e)=>e.id==id)!.rank;
    if(rank<this.dataSource.length){
      var rowToUp=this.dataSource.find((e)=>e.rank==rank+1);
      var rowToDown=this.dataSource.find((e)=>e.rank==rank);
      rowToUp!.rank=rank;
      rowToDown!.rank=rank+1;
      this.dataSource=[...this.sortArrrayByRank(this.dataSource)];
    }
  }

  getRank(id:number):number{
    return this.dataSource.find((e)=>e.id==id)!.rank;
  }


  sortArrrayByRank(array:any[]){
    return array.sort((e1,e2)=>e1.rank-e2.rank);
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
