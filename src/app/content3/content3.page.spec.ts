import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Content3Page } from './content3.page';

describe('Content3Page', () => {
  let component: Content3Page;
  let fixture: ComponentFixture<Content3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
