import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if (localStorage.getItem('usertoken') != null) {
      this.saveUserData();
    }
  }
  isLogin = new BehaviorSubject('');
  userData = new BehaviorSubject(null);
  saveUserData() {
    let userToken = JSON.stringify(localStorage.getItem('usertoken'));
    this.userData.next(jwtDecode(userToken));
  }

  register(registerData:object):Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',registerData)
  }
  login(loginData:object):Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',loginData)
  }
  logOut() {
    localStorage.removeItem('usertoken');
    this.userData.next(null);
    this._Router.navigate(['login']);
  }
  showHome() {
    // let log:boolean=true;
    this.isLogin.next('true')
  }
  hideHome() {
    this.isLogin.next('')
  }

}
