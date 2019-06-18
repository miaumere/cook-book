import { Injectable } from '@angular/core';
import { Recipe } from './classes/recipe';
import { Observable, of } from 'rxjs';
import { tap, catchError, delay, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipeUrl = 'api/recipes';

  constructor(
    private http: HttpClient,
  ) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }


  getRecipe(id: number): Observable<Recipe[]> {
    const url = `${this.recipeUrl}/${id}`;
    return this.http.get<Recipe[]>(url);
  }

  getAllCategories(): Observable<string[]> {

    return this.http.get<Recipe[]>(this.recipeUrl).pipe(
      delay(3000),
      map(recipes => {
        const categoriesArray: string[] = [];

        for (const recipe of recipes) {
          if (!categoriesArray.includes(recipe.category)) {
            categoriesArray.push(recipe.category)
          }
        }

        return categoriesArray;
      })
    );
  }

}
