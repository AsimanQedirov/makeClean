import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleverComponent } from './celever.component';

describe('CeleverComponent', () => {
  let component: CeleverComponent;
  let fixture: ComponentFixture<CeleverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeleverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeleverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
