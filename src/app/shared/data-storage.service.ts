import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes = () => this.http.put('https://ng-recipe-book-b7ead.firebaseio.com/recipes.json', this.recipeService.getRecipes());

  getRecipes = () => this.http.get<Recipe[]>('https://ng-recipe-book-b7ead.firebaseio.com/recipes.json')
    .pipe(
      map(
        rspns => {
          const recipes: Recipe[] = rspns;
          recipes.map(recipe => recipe['ingredients'] = recipe['ingredients'] ? [] : recipe['ingredients']);
          this.recipeService.setRecipes(rspns);
        })
    )
}
