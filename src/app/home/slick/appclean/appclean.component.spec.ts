import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcleanComponent } from './appclean.component';

describe('AppcleanComponent', () => {
  let component: AppcleanComponent;
  let fixture: ComponentFixture<AppcleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
