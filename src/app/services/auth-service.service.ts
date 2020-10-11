import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  TOKEN_KEY = "token"
  getLogin(){
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type","application/json")
    this.http.post("https://ssvcv1.rentificial.com/Auth/authenticate", { "Username": "fgungor@rentificial.com", "Password": "408c3fe418d4e69034a23682ffb08d33"},{headers:headers}).subscribe(data=>
    {
      this.saveToken(data.Result.Token)
    })
  }

  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY,token)
  }

  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
