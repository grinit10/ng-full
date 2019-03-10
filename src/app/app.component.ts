import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  public signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      'user': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    });
  }
}
