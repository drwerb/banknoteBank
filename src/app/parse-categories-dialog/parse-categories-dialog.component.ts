import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/category';

var nextId: number = 4;

interface ParsedCategory {
    id?: number,
    title: string,
    link: string,
    image: string
}

@Component({
  selector: 'app-parse-categories-dialog',
  templateUrl: './parse-categories-dialog.component.html',
  styleUrls: ['./parse-categories-dialog.component.css']
})
export class ParseCategoriesDialogComponent implements OnInit {

  isDialogShown: boolean = false;

  parseUrl: string;
  parsedCategories: ParsedCategory[];

  @Output() onAdd = new EventEmitter<Category>();
  @Output() onClose = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  parseCategories() {
      this.http.get<ParsedCategory[]>(this.parseUrl)
          .subscribe(
              categories => this.parsedCategories = categories
          );
  }

  addCategory() {
      //this.onAdd.emit(new Category(nextId++, this.title, this.imgUrl, this.info));
      this.closeDialog();
  }

  closeDialog() {
      this.isDialogShown = false;
      this.onClose.emit();
  }

  showDialog() {
      this.isDialogShown = true;
  }

}
