import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Joblist2Component } from './joblist2.component';

describe('Joblist2Component', () => {
  let component: Joblist2Component;
  let fixture: ComponentFixture<Joblist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Joblist2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Joblist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
