import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer';
@NgModule({
    declarations:[],
    imports:[CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer)],
    providers:[],
})
export class TodoModule{

} 