import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public _AuthService:AuthService) {}
  isLogin:boolean=true;

  ngOnInit():void {
    this._AuthService.isLogin.subscribe(() => {
      if (this._AuthService.isLogin.getValue() != '') {
            this.isLogin=true;
          }
          else {
            this.isLogin=false;
          }
    })

    // this._AuthService.userData.subscribe(()=> {
    //   if (this._AuthService.userData.getValue() != null) {
    //     this.isLogin=true;
    //   }
    //   else {
    //     this.isLogin=false;
    //   }
    // })
  }
  logOut() {
    this._AuthService.logOut();
  }

}
