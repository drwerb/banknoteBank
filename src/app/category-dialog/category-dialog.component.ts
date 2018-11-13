import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../models/category';

var nextId: number = 4;

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {

  isDialogShown: boolean = false;

  title: string;
  imgUrl: string;
  info: string;


  @Output() onAdd = new EventEmitter<Category>();
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCategory() {
      this.onAdd.emit(new Category(nextId++, this.title, this.imgUrl, this.info));
      this.closeDialog();
      this.title = "";
      this.imgUrl = "";
      this.info = "";
  }

  closeDialog() {
      this.isDialogShown = false;
      this.onClose.emit();
  }

  showDialog() {
      this.isDialogShown = true;
  }
}
