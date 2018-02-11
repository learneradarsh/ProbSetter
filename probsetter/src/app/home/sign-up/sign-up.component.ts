import { Component, OnInit, HostBinding } from '@angular/core';

import { Router } from '@angular/router';
import { moveIn, fallIn } from '../../router.animation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [moveIn(), fallIn()]

})
export class SignUpComponent implements OnInit {

  @HostBinding('@moveIn') get moveIn() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
