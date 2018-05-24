import { Component, OnInit } from '@angular/core';
declare const swal: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Query() {
    this.openAlert();
  }
  openAlert() {
    swal({
      title: 'Success!',
      text: 'Query Submitted!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }
}
