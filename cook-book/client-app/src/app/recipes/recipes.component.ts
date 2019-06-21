import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../classes/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  subscriptions$ = new Subscription();


  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipesService.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }
}
