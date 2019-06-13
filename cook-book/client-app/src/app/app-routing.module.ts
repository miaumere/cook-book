import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'details/:id', component: RecipeDetailsComponent },
  { path: 'add', component: NewRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
