import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './page/todo-page/Todo.component';
import { MatButtonModule } from '@angular/material/button';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { MatInputModule } from '@angular/material/input';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoListItemUiComponent } from './ui/todo-list-item-ui/todo-list-item-ui.component';
import { TodoEditFormUiComponent } from './ui/todo-edit-form-ui/todo-edit-form-ui.component';
@NgModule({
  declarations: [
    TodoComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemUiComponent,
    TodoEditFormUiComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      },
    ]),
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  providers: [],
})
export class TodoModule {}
