import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoModule } from './modules/todo/todo.module';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TodoModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
