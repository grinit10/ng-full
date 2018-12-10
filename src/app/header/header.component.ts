import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private datastorageService: DataStorageService, private authService: AuthService, ) {}

  ngOnInit() {
  }

  onsavedata = () => this.datastorageService.storeRecipes().subscribe();

  onfetchdata = () => this.datastorageService.getRecipes();

  onsignout = () => this.authService.signoutuser();
}
