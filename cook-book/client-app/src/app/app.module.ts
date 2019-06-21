import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';

import { TooltipDirective } from './shared/tooltip/tooltip.directive';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { RouterModule } from '@angular/router';
import { TooltipComponent } from './shared/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    NewRecipeComponent,
    RecipeDetailsComponent,
    NavbarComponent,
    LoaderComponent,
    TooltipDirective,
    TooltipComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
