import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { TasksComponent } from './tasks/tasks.component'
import { UsersCreateComponent } from './users-create/users-create.component';
import { TasksCreateComponent } from './tasks-create/tasks-create.component';


const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UsersCreateComponent },
  { path: 'tasks/:id', component: TasksCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
