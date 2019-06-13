import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../classes/recipe';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipes: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.getRecipe();

  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(id)
      .subscribe(recipes => this.recipes = recipes);
  }
}
