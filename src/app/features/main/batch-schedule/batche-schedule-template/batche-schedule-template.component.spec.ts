import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatcheScheduleTemplateComponent } from './batche-schedule-template.component';

describe('BatcheScheduleTemplateComponent', () => {
  let component: BatcheScheduleTemplateComponent;
  let fixture: ComponentFixture<BatcheScheduleTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatcheScheduleTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatcheScheduleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
