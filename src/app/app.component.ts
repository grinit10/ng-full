import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultValue = 'pet';
  questionAnswer = '';
  genders = ['Male', 'Female'];

  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.value.userData.username = suggestedName;
    this.signupForm.setValue(this.signupForm.value);
  }

  // onsubmit = (f: NgForm) => {console.log(f);
  onsubmit = () => {console.log(this.signupForm);
  }
}
