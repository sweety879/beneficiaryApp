import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    name:'',
    email: '',
    password: ''
  }
  constructor(private _auth:AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
        .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('token',res.token)
            this._router.navigate(['/accounts'])
          },
          err => console.log(err)
        )
  }
}
