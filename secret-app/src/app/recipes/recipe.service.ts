import  { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('Sopa Mix', 'This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
    new Recipe('Hamberger', 'This is simply a test','https://assets.metrolatam.com/do/2015/09/18/CPL_VKyUAAAX9sG-900x600.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}

