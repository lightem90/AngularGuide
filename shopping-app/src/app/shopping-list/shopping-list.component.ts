import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppinglistService: ShoppingListService) { }
  ingredients: Ingredient[];

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    );
  }

}
