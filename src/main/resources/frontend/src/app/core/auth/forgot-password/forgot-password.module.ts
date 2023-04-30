import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPaasswordRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPaasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
