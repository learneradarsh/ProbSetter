import { Component, OnInit, AfterViewInit, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare const swal: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
UserName: any ;
Password: any ;
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }

  loginBtn(e) {

    if (this.UserName === 'manish' && this.Password === 'password') {
      this.openAlert1(); this.router.navigate(['dashboard']);
    } else {
      this.openAlert();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdProbDialogComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
      text: 'Welcome ProbSetter!',
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
export class AdProbDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AdProbDialogComponent>,
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
