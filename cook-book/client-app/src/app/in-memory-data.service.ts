import { Recipe } from './classes/recipe';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const recipes: Recipe[] = [
      { id: 1, title: 'Naleśniki', description: 'naleśniki są kkk', recipe: 'oto sposób robienia nalesników', category: '🍨 desery', },
      { id: 2, title: 'Pyzy', description: 'pyzy są kkk', recipe: 'oto sposób robienia pyz', category: '🍽️ obiady', },
      { id: 3, title: '🥗 Sałatka', description: 'salatke zrobic czaaas', recipe: 'oto sposób robienia salatki', category: '🥗 sałatki', },
      { id: 4, title: '🍣 Sushi', description: 'sushi jest kkk', recipe: 'oto sposób robienia sushi', category: '🍽️ obiady', },
      { id: 5, title: 'JAKIES SWINSTWO i', description: 'FUJ FUJ FUJ', recipe: 'oto sposób robienia SWINSTWA', category: '🍽️ obiady', },
      { id: 6, title: 'Ciastka', description: 'ciastka są kkk', recipe: 'oto sposób robienia ciastek', category: '🍰 wypieki', }
    ];

    const test = ['t1', 't2'];

    return { recipes, test };
  }

  constructor() { }
}
