import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailLoginComponent } from './email-login/email-login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatCheckboxModule, MatCardModule,
    RouterModule
  ],
  declarations: [LoginComponent, SignUpComponent, EmailLoginComponent],
  exports: [LoginComponent, SignUpComponent]
})
export class HomeModule { }
