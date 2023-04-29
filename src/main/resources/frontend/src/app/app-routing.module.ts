import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGardService as AuthGard}  from './core/_services/auth-gard.service';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },
  {path:'passwords',loadChildren: () => import('./password-manager/password-manager.module').then(m => m.PasswordManagerModule),canActivate:[AuthGard]},
  { path: '**', redirectTo: 'pages/notfound' },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
