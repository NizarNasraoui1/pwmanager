import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordManagerRoutingModule } from './password-manager-routing.module';
import { ViewPasswordsComponent } from './components/view-passwords/view-passwords.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddPasswordPopupComponent } from './components/add-password-popup/add-password-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ModifyPasswordComponent } from './components/modify-password/modify-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewPasswordsComponent,
    AddPasswordPopupComponent,
    ModifyPasswordComponent
  ],
  imports: [
    CommonModule,
    PasswordManagerRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule



  ]
})
export class PasswordManagerModule { }
