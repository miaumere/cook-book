import { RecipesService } from './../../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/classes/recipe';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  private searchTerms = new Subject<string>();


  constructor(private recipesService: RecipesService) { }

  search(term: string): void {
    this.searchTerms.next(term);

  }
  ngOnInit(): void {
    this.recipes$ = this.searchTerms.pipe(
      distinctUntilChanged(),
      switchMap((term: string) => this.recipesService.searchHeroes(term)),
    )
  }
}
