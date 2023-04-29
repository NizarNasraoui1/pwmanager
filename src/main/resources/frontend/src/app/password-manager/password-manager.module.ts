import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordManagerRoutingModule } from './password-manager-routing.module';
import { ViewPasswordsComponent } from './components/view-passwords/view-passwords.component';


@NgModule({
  declarations: [
    ViewPasswordsComponent
  ],
  imports: [
    CommonModule,
    PasswordManagerRoutingModule
  ]
})
export class PasswordManagerModule { }
