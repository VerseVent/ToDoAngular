import {
  Component,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Todo } from '../../models/todo';
import {
  TodoToggleAction,
  TodoDeleteAction,
  TodoActions,
} from '../../store/todo/todo.actions';
@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent {
  @Input() todoList?: Todo[] | null = [];

  @Output()
  deleteTodo = new EventEmitter<number>();

  @Output()
  toggleTodo = new EventEmitter<number>();

  @Output()
  editTodo = new EventEmitter<{ id: number; name: string }>();

  editIds: Array<number> = [];

  onToggle(id: number) {
    this.toggleTodo.emit(id);
  }
  onDelete(id: number) {
    this.deleteTodo.emit(id);
  }
  onEdit(id: number) {
    if (!this.editIds.includes(id)) {
      this.editIds.push(id);
      return;
    }
  }
  onCancel(id: number) {
    this.editIds = this.editIds.filter((editId) => editId !== id);
  }
  onActionEdit(name: string, id: number) {
    this.editIds = this.editIds.filter((editId) => editId !== id);

    this.editTodo.emit({ name, id });
  }
}
