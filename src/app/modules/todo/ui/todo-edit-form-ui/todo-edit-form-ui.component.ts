import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-edit-form-ui',
  templateUrl: './todo-edit-form-ui.component.html',
  styleUrls: ['./todo-edit-form-ui.component.scss'],
})
export class TodoEditFormUiComponent implements OnInit {
  @Input()
  prevName: string;

  name: string;

  ngOnInit() {
    this.name = this.prevName;
  }

  @Output()
  editTodo = new EventEmitter<string>();

  @Output()
  cancelEdit = new EventEmitter<number>();

  onCancel() {
    console.log(this.prevName, this.name);
    this.name = this.prevName;
    this.cancelEdit.emit();
  }

  onSubmit() {
    if (this.name) {
      this.editTodo.emit(this.name);
    }
  }
}
