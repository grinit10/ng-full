import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authservice.loggedIn;
  }

  navigateToServers = () => {
    this.router.navigate(['servers']);
  }

  login = () => {
    this.authservice.login();
  }

  logout = () => {
    this.authservice.logout();
  }
}
