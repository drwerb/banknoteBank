import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Category } from './models/category';

const CATEGORIES: Category[] = [
  { id: 1, title: "Europe", imgUrl: "none", info: "Europe info" },
  { id: 2, title: "Asia", imgUrl: "none", info: "Asia info" },
  { id: 3, title: "Africa", imgUrl: "none", info: "Africa info" }
];
``
@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() : Observable<Category[]> {
      return of(CATEGORIES);
  }

  addCategory(category: Category) {
      CATEGORIES.push(category);
  }

}
