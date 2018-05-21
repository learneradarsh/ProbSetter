import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {
  problemName: any;
  addProblem: FormGroup;
  Language = [
    {value: 'c', viewValue: 'C'},
    {value: 'cpp', viewValue: 'CPP'},
    {value: 'java', viewValue: 'Java'},
    {value: 'python', viewValue: 'Python'}
  ];
  Levels = [
    {value: 'easy', viewValue: 'Easy'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'hard', viewValue: 'Hard'},
    {value: 'expert', viewValue: 'Expert'}
  ];
  constructor(public frmbuilder: FormBuilder) {
    this.addProblem = frmbuilder.group({
      pName: new FormControl(),
      pStatement: new FormControl(),
      pEditorial: new FormControl(),
      pSolution: new FormControl()
      });
   }
  ngOnInit() {this.buildForm(); }
  public buildForm() {
    this.addProblem = this.frmbuilder.group({
      pName: ['', [Validators.required]],
      pStatement: ['', [Validators.required]],
      pEditorial: ['', [Validators.required]],
      pSolution: ['', [Validators.required]]
    });
}
}
