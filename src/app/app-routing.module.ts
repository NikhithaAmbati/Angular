import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
 
  { path: 'tasks', component: TaskListComponent },

  { path: 'create', component: CreateTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
