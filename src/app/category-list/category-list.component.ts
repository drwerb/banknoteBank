import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
import { ParseCategoriesDialogComponent } from '../parse-categories-dialog/parse-categories-dialog.component';
import { Category } from '../models/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = null;
  listDisabled: boolean = false;
  parentCategoryId: number = null;

  @ViewChild(ParseCategoriesDialogComponent) private parseCategoriesDialog: ParseCategoriesDialogComponent;
  @ViewChild(CategoryDialogComponent) private newCategoryDialog: CategoryDialogComponent;

  constructor(
      private router: ActivatedRoute,
      private categoryService: CategoryService
  ) { }

  ngOnInit() {
      this.parentCategoryId = +this.router.snapshot.paramMap.get('id') || null;

      this.refreshList();
  }

  refreshList() {
      this.categoryService.getCategories()
            .subscribe(
                categories =>
                    this.categories = categories.filter((item) => item.parentId == this.parentCategoryId )
            );
  }

  showNewCategoryDialog() {
      this.newCategoryDialog.showDialog();
      this.listDisabled = true;
  }

  showParseCategoriesDialog() {
      this.parseCategoriesDialog.showDialog();
      this.listDisabled = true;
  }

  addCategory(category: Category) {
      category.parentId = this.parentCategoryId;
      this.categoryService.addCategory(category);
      this.refreshList();
      this.listDisabled = false;
  }

  activateList() {
      this.listDisabled = false;
  }
}
