import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipesService } from './../recipes.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  public Editor = ClassicEditor;
  public editorData = '<p>Hello, world!</p>';

  recipeForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),

    description: new FormControl('',
      [Validators.required,
      Validators.minLength(50),
      Validators.maxLength(250)]),

    recipe: new FormControl('',
      [Validators.required,
      Validators.minLength(150)]
    ),
    category: new FormControl('null', Validators.required),

  });

  subscriptions$ = new Subscription();

  recipes: string[];

  constructor(private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.getAllCategories()
  }

  OnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  getAllCategories() {

    const observableResult$ = this.recipesService.getAllCategories();

    this.subscriptions$.add(
      observableResult$.subscribe(
        result => {
          this.recipes = result;
        }
      )
    )

  }

}
