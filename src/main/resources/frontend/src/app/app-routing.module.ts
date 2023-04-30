import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGardService as AuthGard}  from './core/_services/auth-gard.service';


const routes: Routes = [
  {path:'password',loadChildren: () => import('./password-manager/password-manager.module').then(m => m.PasswordManagerModule)//,canActivate:[AuthGard]
},
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },

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
