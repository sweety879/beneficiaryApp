import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData= {
    email:'',
    password:''
  }
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
              .subscribe(
                res => {
                  console.log(res)
                  localStorage.setItem('token',res.token)
                  this._router.navigate(['/accounts'])
                },
                err=>console.log(err)
              )
  }
}
