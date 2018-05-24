import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public Edit: boolean = false;
  public buttonName: any = 'Edit';
  firstName: string;
  lastName: string;
  constructor() { }

  ngOnInit() {
    this.firstName = 'Alec';
    this.lastName = 'Thompson';
           $(document).ready(function() {
        $('#myForm :input').prop('disabled', true);
        $('#submit').prop('disabled', false);
    });
  }



  toggle() {
    this.Edit = !this.Edit;

    if (this.Edit) {
       this.buttonName = 'Update';
       $(document).ready(function() {
        $('#myForm :input').prop('disabled', false);
        $('#submit').prop('disabled', false);
    });
    } else {
            this.buttonName = 'Edit';
            $(document).ready(function() {
              $('#myForm :input').prop('disabled', true);
              $('#submit').prop('disabled', false);
          });
      }
  }

}
