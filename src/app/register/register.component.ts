import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error:string='';
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    last_name:new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    age:new FormControl(null,[Validators.required, Validators.min(16),Validators.max(80)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.pattern(`^\.{8,20}$`)])
  });
  constructor (public _AuthService:AuthService, public _Router:Router) {}
  registerFormSubmit (registerForm:FormGroup) {
    if (registerForm.valid) {
      this. _AuthService.register(registerForm.value).subscribe((response)=>{
        if (response.message=='suceess') {
          this._Router.navigate(['login'])
        }
        else {
          // this.error=Response.message
          this.error=response.errors.email.message
        }
      })

    }
  }
}
