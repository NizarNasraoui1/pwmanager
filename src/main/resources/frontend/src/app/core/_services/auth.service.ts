import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginForm } from 'src/app/shared/models/loginForm';
import { TokenStorageService } from './token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private tokenStorageService:TokenStorageService) { }

  login(loginForm:LoginForm): Observable<any> {

    let body = new URLSearchParams();
    body.set('username', loginForm.username);
    body.set('password', loginForm.password);

    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http
        .post('/api/login', body.toString(), options);
  }

  logOut(){
    this.tokenStorageService.signOut();
  }

  register(username:string,password:string): Observable<any> {
    return this.http.post('api/user/save', {
      username: username,
      password: password
    }, httpOptions);
  }

  isAuthenticated():boolean{
    const token=this.tokenStorageService.getToken();
    if(!token) return false;
    return true;
  }
}
