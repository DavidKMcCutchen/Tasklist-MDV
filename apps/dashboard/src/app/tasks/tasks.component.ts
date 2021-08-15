import { Component, OnInit } from '@angular/core';
import { Task } from '@tasklist/api-interfaces';
import { Observable } from 'rxjs';
import { TasksFacade } from '@tasklist/core-state';
import { Router } from '@angular/router';

@Component({
  selector: 'tasklist-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]> = this.tasksFacade.allTasks$;

  constructor(private tasksFacade: TasksFacade, private router: Router) {}

  ngOnInit() {
    this.tasksFacade.loadTasks();
    this.tasksFacade.mutations$.subscribe((_) => this.resetTask());
  }

  selectTask(task: Task) {
    this.tasksFacade.selectTask(task.id);
    this.router.navigate(['tasks', task.id]);
  }
  
  createTask() {
    this.router.navigate(['tasks', 'create']);
  }

  deleteTask(task: Task) {
    this.tasksFacade.deleteTask(task.id);
  }

  resetTask() {
    this.tasksFacade.selectTask(null);
  }

  cancel() {
    this.resetTask();
  }
}
