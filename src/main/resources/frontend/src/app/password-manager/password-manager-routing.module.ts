import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPasswordsComponent } from './components/view-passwords/view-passwords.component';

const routes: Routes = [{path:'',component:ViewPasswordsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordManagerRoutingModule { }
