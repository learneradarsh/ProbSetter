import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  menuClick() {
    // document.getElementById('main-panel').style.marginRight = '260px';
  }

logout() {
  this.router.navigate(['/']);
}

}
