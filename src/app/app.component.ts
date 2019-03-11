import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  public signupForm: FormGroup;
  public unallowednames: Array<string> = ['Arnab', 'Arpita'];

  constructor() {
    this.signupForm = new FormGroup({
      userdata: new FormGroup({
        user: new FormControl(null, [Validators.required, this.unallowedNamesValidator.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.invalidEmailValidatorAsync)
      }),
      gender: new FormControl('male')
    });
  }

  invalidEmailValidatorAsync = (control: FormControl): Promise<any> | Observable<any> => {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'ForbiddenEmailPresent': true });
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

  unallowedNamesValidator = (control: FormControl): any => {
    if (this.unallowednames.find(name => name === control.value)) {
      return { 'Forbidden name present': true };
    } else {
      return null;
    }
  }

  onSubmit = () => console.log(this.signupForm);
}
