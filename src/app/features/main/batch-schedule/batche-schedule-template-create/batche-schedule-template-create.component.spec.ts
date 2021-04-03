import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatcheScheduleTemplateCreateComponent } from './batche-schedule-template-create.component';

describe('BatcheScheduleTemplateCreateComponent', () => {
  let component: BatcheScheduleTemplateCreateComponent;
  let fixture: ComponentFixture<BatcheScheduleTemplateCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatcheScheduleTemplateCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatcheScheduleTemplateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
