import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPasswordPopupComponent } from '../add-password-popup/add-password-popup.component';
import { ModifyPasswordComponent } from '../modify-password/modify-password.component';
import { PasswordService } from '../../services/password.service';
import { AuthService } from 'src/app/core/_services/auth.service';
import { Router } from '@angular/router';


export interface PasswordDto {
  id:number,
  name: string;
  password: string;
  rank: number;
}
@Component({
  selector: 'app-view-passwords',
  templateUrl: './view-passwords.component.html',
  styleUrls: ['./view-passwords.component.css']
})



export class ViewPasswordsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'password','up','down','modify','delete'];
  dataSource:PasswordDto[]=[];

  constructor(public dialog: MatDialog,public passwordService:PasswordService,private authService:AuthService,private router:Router){

  }
  ngOnInit(): void {
    this.getAllPasswords();
  }

  onUp(id:number){
    let rank=this.getRank(id);
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
    let name=this.dataSource.find(e=>e.id==id)?.name;
    let password=this.dataSource.find(e=>e.id==id)?.password;
    this.openModifyPasswordPopup(id,name,password);
  }

  openAddPasswordPopup(){
    let dialogRef = this.dialog.open(AddPasswordPopupComponent, {
      width: '60vh',
      height:'70vw',
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.getAllPasswords();
    });
  }

  openModifyPasswordPopup(id:number,name:string | undefined,password:string | undefined){
    let dialogRef = this.dialog.open(ModifyPasswordComponent, {
      width: '60vh',
      height:'70vw',
      data: {
        id: id,
        name: name,
        password:password
      }
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.getAllPasswords();
    });
  }


  getAllPasswords(){
    this.passwordService.getAllPasswords().subscribe((res)=>{
      this.dataSource=res;
    })
  }

  deletePassword(id:number){
    this.passwordService.deletePassword(id).subscribe({
      next: (res)=> this.dataSource=this.dataSource.filter((e)=>e.id!=id),
      error: ()=> console.log("cannot delete")
    })
  }

  updateRanks(){
    this.passwordService.updatePassswordsRank(this.dataSource).subscribe({
      next: (res)=> console.log(res)
    })
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(["/"]);
  }

}
