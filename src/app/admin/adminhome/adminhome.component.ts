import { Component, OnInit } from '@angular/core';
declare const swal: any;
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $('#vertical_tab_nav > ul > li > a').eq(0).addClass( 'selected' );
      $('#vertical_tab_nav > div > article').eq(0).css('display', 'block');
      $('#vertical_tab_nav > ul').click(function(e) {
      if ($(e.target).is('a')) {
            $('#vertical_tab_nav > ul > li > a').removeClass( 'selected');
            $(e.target).addClass('selected');
            const clicked_index = $('a', this).index(e.target);
            $('#vertical_tab_nav > div > article').css('display', 'none');
            $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();
          }
            $(this).blur();
            return false;
        });
    });
  }
  pverify() {
    this.openAlert1();
  }
  qverify() {
    this.openAlert1();
  }
  qreject() {
    this.openAlert();
  }
  openAlert() {
    swal({
      title: 'Rejected',
      confirmButtonClass: 'btn btn-success'
    });
  }
  openAlert1() {
    swal({
      title: 'Success!',
      text: 'You accepted!',
      type: 'success',
      confirmButtonClass: 'btn btn-success'
    });
  }
}
