import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
UserName: any ;
Password: any ;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginBtn(e) {

console.log(this.UserName, this.Password);
this.router.navigate(['dashboard']);

  }
}
