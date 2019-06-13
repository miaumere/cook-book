import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    NewRecipeComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }