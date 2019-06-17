import { Component, OnInit } from '@angular/core';
import { Recipe } from '../classes/recipe';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes(): void {
    this.recipesService.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }
}
