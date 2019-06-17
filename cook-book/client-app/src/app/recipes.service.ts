import { Injectable } from '@angular/core';
import { Recipe } from './classes/recipe';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

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

    const output: string[] = [];
    const recipesObservable = this.http.get<Recipe[]>(this.recipeUrl);

    recipesObservable.subscribe(data => {
      for (const datum of data) {
        if (!output.includes(datum.category)) {
          output.push(datum.category);
        }
      }
    });
    return of(output);
  }

  searchHeroes(term: string): Observable<Recipe[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Recipe[]>(`${this.recipeUrl}/?details=${term}`)
  }
}
