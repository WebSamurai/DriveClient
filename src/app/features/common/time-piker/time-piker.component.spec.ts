import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePikerComponent } from './time-piker.component';

describe('TimePikerComponent', () => {
  let component: TimePikerComponent;
  let fixture: ComponentFixture<TimePikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
