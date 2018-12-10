import { DataStorageService } from './../shared/data-storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private datastorageService: DataStorageService) {}

  onsavedata = () => this.datastorageService.storeRecipes().subscribe();

  onfetchdata = () => this.datastorageService.getRecipes().subscribe();
}
