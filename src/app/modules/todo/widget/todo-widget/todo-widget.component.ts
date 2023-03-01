import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from '../../store/todo/todo.reducer';
import {
  TodoCreateAction,
  TodoToggleAction,
  TodoDeleteAction,
  TodoEditAction,
} from '../../store/todo/todo.actions';
import { Observable } from 'rxjs';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Todo } from '../../models/todo';
import { TodoSyncLocalStorage } from '../../service/todo-sync-localstorage';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit{
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>, private todoSyncStorage:TodoSyncLocalStorage) {}

  ngOnInit(): void {
    this.todoSyncStorage.init();
  }

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({ name }));
  }
  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({ id }));
  }
  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({ id }));
  }
  onEdit(editedTodo: { id: number; name: string }) {
    this.store$.dispatch(
      new TodoEditAction({ id: editedTodo.id, name: editedTodo.name })
    );
  }
}
