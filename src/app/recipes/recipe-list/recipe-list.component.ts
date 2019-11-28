import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'mm-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [`.btn-outline {
    background-color: transparent;
    color: inherit;
    transition: all .5s;
}
.btn-success.btn-outline {
  color: #5cb85c;
}
`]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipe = new Recipe('dummy','dummy description','http://allyskindy.com.au/app/uploads/2018/06/DUMMY.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }

}
