import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceofferComponent } from './serviceoffer.component';

describe('ServiceofferComponent', () => {
  let component: ServiceofferComponent;
  let fixture: ComponentFixture<ServiceofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
