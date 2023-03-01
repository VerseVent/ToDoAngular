import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';
import { TodoStorageAction } from '../store/todo/todo.actions';
import { TodoState } from '../store/todo/todo.reducer';
import { todoFeatureSelector } from '../store/todo/todo.selectors';

const TODO_STORAGE_KEY = 'todo';

@Injectable({ providedIn: 'root' })
export class TodoSyncLocalStorage  {
  constructor(private store$: Store<TodoState>) {}
  private isInited: boolean = false;
  init() {
    if (this.isInited) {
      return;
    }
    this.isInited = true;

    this.loadFromStorage();
    console.log(select(todoFeatureSelector));
    this.store$
      .pipe(
        select(todoFeatureSelector),
        tap((state) => console.log(state)),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(state));
      });

    window.addEventListener('storage', () => {
      this.loadFromStorage();
    });
  }
  loadFromStorage() {
    const storageState = localStorage.getItem(TODO_STORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(
        new TodoStorageAction({ state: JSON.parse(storageState) })
      );
    }
  }
}
