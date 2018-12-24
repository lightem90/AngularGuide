import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ new Recipe('First recipe', 'first text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
                        new Recipe('Second recipe', 'second text', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeSelected: Recipe) {
    this.recipeSelected.emit(recipeSelected);
  }
}
