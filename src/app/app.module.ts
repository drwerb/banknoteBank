import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { AppRoutingModule } from './app-routing.module';

import { CategoryService } from './category.service';
import { ParseCategoriesDialogComponent } from './parse-categories-dialog/parse-categories-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryDialogComponent,
    ParseCategoriesDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
