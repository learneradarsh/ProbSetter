import { Component, OnInit, AfterViewInit, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare const swal: any;
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  UserName: any ;
  Password: any ;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AdDialogComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  loginBtn(e) {

    if (this.UserName === 'manish' && this.Password === 'password') {
      this.openAlert1(); this.router.navigate(['adminHome']);
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
      title: 'Success!',
      text: 'You Logged into Admin!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }


}
@Component({
  selector: 'app-dialog',
  templateUrl: './adforget.html',
  styles: [' ' ]
})
export class AdDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  forget() {
    this.openAlert1();
  }
  openAlert1() {
    swal({
      title: 'Success!',
      text: 'Link Send to Your Email!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
    this.dialogRef.close();
  }
}
