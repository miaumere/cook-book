import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './classes/recipe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const recipes: Recipe[] = [
      { id: 1, title: '🍨 Naleśniki', description: 'naleśniki są kkk', recipe: 'oto sposób robienia nalesników', category: '🍨 desery', },
      { id: 2, title: '🍽️ Pyzy', description: 'pyzy są kkk', recipe: 'oto sposób robienia pyz', category: '🍽️ obiady', },
      { id: 3, title: '🥗 Sałatka', description: 'salatke zrobic czaaas', recipe: 'oto sposób robienia salatki', category: '🥗 sałatki', },
      { id: 4, title: '🍣 Sushi', description: 'sushi jest kkk', recipe: 'oto sposób robienia sushi', category: '🍽️ obiady', },
      { id: 5, title: '🍰 Ciastka', description: 'ciastka są kkk', recipe: 'oto sposób robienia ciastek', category: '🍰 wypieki', }
    ];

    return recipes;
  }

  constructor() { }
}
