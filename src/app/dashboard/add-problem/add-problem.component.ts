import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

  fruits = [
    'DP',
  ];

  allFruits = [
    'Numerical',
    'Implementation',
    'DS',
    'Graph',
    'Tree'
  ];

  @ViewChild('fruitInput') fruitInput: ElementRef;

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
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
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

add(event: MatChipInputEvent): void {
  const input = event.input;
  const value = event.value;

  // Add our fruit
  if ((value || '').trim()) {
    this.fruits.push(value.trim());
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }

  this.fruitCtrl.setValue(null);
}

remove(fruit: any): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
  }
}

filter(name: string) {
  return this.allFruits.filter(fruit =>
      fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
}

selected(event: MatAutocompleteSelectedEvent): void {
  this.fruits.push(event.option.viewValue);
  this.fruitInput.nativeElement.value = '';
  this.fruitCtrl.setValue(null);
}
}

