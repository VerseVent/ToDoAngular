import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss'],
})
export class TodoListItemUiComponent {
  @Input()
  todo: Todo;

  @Output()
  toggleEmitter = new EventEmitter<number>();

  @Output()
  deleteEmitter = new EventEmitter<number>();

  @Output()
  editEmitter = new EventEmitter<{ id: number; name: string }>();

  onToggle() {
    this.toggleEmitter.emit();
  }
  onDelete() {
    this.deleteEmitter.emit();
  }
  onEdit() {
    this.editEmitter.emit();
  }
}
