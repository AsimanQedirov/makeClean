import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviceoffer2Component } from './serviceoffer2.component';

describe('Serviceoffer2Component', () => {
  let component: Serviceoffer2Component;
  let fixture: ComponentFixture<Serviceoffer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Serviceoffer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Serviceoffer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
