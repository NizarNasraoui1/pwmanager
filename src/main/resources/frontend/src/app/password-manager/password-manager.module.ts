import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordManagerRoutingModule } from './password-manager-routing.module';
import { ViewPasswordsComponent } from './components/view-passwords/view-passwords.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ViewPasswordsComponent
  ],
  imports: [
    CommonModule,
    PasswordManagerRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule

  ]
})
export class PasswordManagerModule { }
