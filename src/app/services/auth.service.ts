import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user-login';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  signIn(email: string, password: string): void{
    console.log("Llega email -> "+email);
    console.log("Llega pass -> "+password);
    let newAuthUser = new UserLogin(email, password);
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(newAuthUser);
    let obs: Observable<any> = this.http.post("http://localhost:8083/users/login", body, {'headers':headers});
    obs.forEach(value => {
      console.log(value.token);
      this.setToken(value.token);
    })
  }

  setToken(new_token: String):void{
    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + 1);
    if(!this.cookies.check("token")){
      this.cookies.set("token",new_token.toString(),dateNow);
    }
  }

  deleteToken():void{
    this.cookies.delete("token");
  }

  getToken():String{
    return this.cookies.get("token");
  }
  isAuthenticated():boolean{
    return this.cookies.check("token");
  }



}
