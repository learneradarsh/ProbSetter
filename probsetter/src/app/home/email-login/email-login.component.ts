import { Component, OnInit, HostBinding } from '@angular/core';

import { Router } from '@angular/router';
import { moveIn } from '../../router.animation';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.css'],
  animations: [moveIn()]
})
export class EmailLoginComponent implements OnInit {

  @HostBinding('@moveIn') get moveIn() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
