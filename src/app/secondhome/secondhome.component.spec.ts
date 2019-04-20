import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondhomeComponent } from './secondhome.component';

describe('SecondhomeComponent', () => {
  let component: SecondhomeComponent;
  let fixture: ComponentFixture<SecondhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
