import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEditFormUiComponent } from './todo-edit-form-ui.component';

describe('TodoEditFormUiComponent', () => {
  let component: TodoEditFormUiComponent;
  let fixture: ComponentFixture<TodoEditFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoEditFormUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoEditFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
