import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCrearEditarComponent } from './task-crear-editar.component';

describe('TaskCrearEditarComponent', () => {
  let component: TaskCrearEditarComponent;
  let fixture: ComponentFixture<TaskCrearEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCrearEditarComponent]
    });
    fixture = TestBed.createComponent(TaskCrearEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
