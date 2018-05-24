import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const swal: any;
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

    if (this.UserName === 'manish' && this.Password === 'password') {
      this.openAlert1(); this.router.navigate(['dashboard']);
    } else {
      this.openAlert();
    }


  }


  openAlert() {
    swal({
      title: 'Incorrect Credential',
      confirmButtonClass: 'btn btn-success'
    });
  }

  openAlert1() {
    swal({
      title: 'Good job!',
      text: 'You clicked the button!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }
}
