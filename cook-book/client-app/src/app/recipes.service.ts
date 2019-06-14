import { Injectable } from '@angular/core';
import { Recipe } from './classes/recipe';
import { Observable, of } from 'rxjs';
import { RECIPES } from './mock-recipes';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(public httpClient: HttpClient) { }

  getRecipe(id: number): Observable<Recipe> {

    return of(RECIPES.find(recipe => recipe.id === id));
  }

  getAllCategories(): Observable<string[]> {

    const output: string[] = [];
    for (const recipe of RECIPES) {
      if (!output.includes(recipe.category)) {
        output.push(recipe.category);
      }
    }

    return of(output);

  }
}
