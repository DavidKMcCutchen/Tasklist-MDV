import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistDetailsComponent } from './tasklist-details.component';

describe('TasklistDetailsComponent', () => {
  let component: TasklistDetailsComponent;
  let fixture: ComponentFixture<TasklistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
