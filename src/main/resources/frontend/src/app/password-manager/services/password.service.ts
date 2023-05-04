import { Injectable } from '@angular/core';
import { PasswordDto } from '../components/view-passwords/view-passwords.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const passwordApiUrl="/api/password";


@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http:HttpClient) { }

  getAllPasswords():Observable<any>{
    return this.http.get(`${passwordApiUrl}/all`);
  }

  addPassword(password:any):Observable<any>{
    return this.http.post(passwordApiUrl,password);
  }

  updatePassword(id:number,password:any):Observable<any>{
    return this.http.put(`${passwordApiUrl}/${id}`,password);
  }

  updatePassswordsRank(passwords:any[]):Observable<any>{
    return this.http.put(`${passwordApiUrl}/ranks`,passwords);
  }




}
