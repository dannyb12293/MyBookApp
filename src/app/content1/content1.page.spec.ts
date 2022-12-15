import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content1Page } from './content1.page';

describe('Content1Page', () => {
  let component: Content1Page;
  let fixture: ComponentFixture<Content1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
