import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/category', pathMatch: 'full' },
    { path: 'category', component: CategoryListComponent },
    { path: 'category/:id', component: CategoryListComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
