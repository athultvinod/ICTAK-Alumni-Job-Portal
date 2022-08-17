import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobs2Component } from './jobs2.component';

describe('Jobs2Component', () => {
  let component: Jobs2Component;
  let fixture: ComponentFixture<Jobs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jobs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jobs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
