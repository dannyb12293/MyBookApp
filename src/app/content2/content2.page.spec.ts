import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content2Page } from './content2.page';

describe('Content2Page', () => {
  let component: Content2Page;
  let fixture: ComponentFixture<Content2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
