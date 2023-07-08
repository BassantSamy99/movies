import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string=''

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(`^\.{8,20}$`)])
  });
  constructor(public _AuthService:AuthService, public _Router:Router){
    this._AuthService.hideHome();
  }
  loginFormSubmit(loginForm:FormGroup) {
    if (loginForm.valid) {
      this. _AuthService.login(loginForm.value).subscribe((response)=>{
        if (response.message=='suceess') {
          localStorage.setItem('usertoken',response.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['home'])
        }
        else {
          // this.error=Response.message
          this.error=response.errors.email.message
        }
      })

    }

  }

}
