import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare const swal: any;
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buyNow() {
this.openAlert1();
  }
  openAlert1() {
    swal({
      title: 'Waittt!',
      text: 'Payment Gateway in Process',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }
}
