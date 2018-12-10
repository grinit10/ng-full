import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string = null;

  constructor(private router: Router) { }

  signupUser = (email: string, password: string) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        err => console.log(err)
      );
  }

  signinUser = (email: string, password: string) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        rspns => {
          firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
          console.log(rspns);
          this.router.navigate(['/']);
        }
      )
      .catch(
        err => alert(err)
      );
  }

  getToken = () => {
    firebase.auth().currentUser.getIdToken();
  }

  isAuthenticated = (): boolean => this.token !== null;

  signoutuser = () => {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
  }
}
