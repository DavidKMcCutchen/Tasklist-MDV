import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from '@tasklist/ui-login';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';

const routes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'tasks/create', component: TaskDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
