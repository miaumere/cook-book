import { Injectable } from '@angular/core';
import { Recipe } from './classes/recipe';
import { Observable, of } from 'rxjs';
import { RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }
  getRecipe(id: number): Observable<Recipe> {

    return of(RECIPES.find(recipe => recipe.id === id));
  }
}
