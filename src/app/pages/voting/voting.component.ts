import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['question', '123']);
  }
}
