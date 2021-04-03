import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatcheScheduleTemplateListComponent } from './batche-schedule-template-list.component';

describe('BatcheScheduleTemplateListComponent', () => {
  let component: BatcheScheduleTemplateListComponent;
  let fixture: ComponentFixture<BatcheScheduleTemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatcheScheduleTemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatcheScheduleTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
