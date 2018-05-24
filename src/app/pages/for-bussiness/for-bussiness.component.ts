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
      title: 'Good job!',
      text: 'You clicked the button!',
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
