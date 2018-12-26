import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'first text',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('a1', 5)]),
    new Recipe(
      'Second recipe',
      'second text',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
       [new Ingredient('a2', 2)])];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
      return this.recipes.slice();
    }

}
