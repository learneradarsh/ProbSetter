import { Component, OnInit, AfterViewInit, Inject  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare const swal: any;
@Component({
  selector: 'app-for-bussiness',
  templateUrl: './for-bussiness.component.html',
  styleUrls: ['./for-bussiness.component.css']
})
export class ForBussinessComponent implements OnInit {
  hide = false;
   UserName: any;
  Password: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '500px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog1(): void {
    const dialogRef = this.dialog.open(AdBussDialogComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  loginBtn() {
console.log(this.UserName, this.Password);
if (this.UserName === 'manish' && this.Password === 'password') {
  this.hide = true; this.openAlert1()
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
      text: 'You are now logged In!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css' ]
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'app-dialog',
  templateUrl: './adforget.html',
  styles: [' ' ]
})
export class AdBussDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AdBussDialogComponent>,
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
