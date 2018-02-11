import { Component, OnInit, HostBinding, Directive  } from '@angular/core';

import { Router } from '@angular/router';
import { moveIn } from '../../router.animation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
})


export class LoginComponent implements OnInit {

  @HostBinding('@moveIn') get moveIn() {
    return true;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginFb() {
    this.router.navigate(['/signup']);
  }
}
