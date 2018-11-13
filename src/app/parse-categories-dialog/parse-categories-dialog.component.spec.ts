import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseCategoriesDialogComponent } from './parse-categories-dialog.component';

describe('ParseCategoriesDialogComponent', () => {
  let component: ParseCategoriesDialogComponent;
  let fixture: ComponentFixture<ParseCategoriesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseCategoriesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseCategoriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
