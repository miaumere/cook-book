import { Component, OnInit } from '@angular/core';
import { Recipe } from '../classes/recipe';
import { RECIPES } from './../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = RECIPES;


  constructor() { }

  ngOnInit() {
  }

}
