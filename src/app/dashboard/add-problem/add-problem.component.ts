import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
