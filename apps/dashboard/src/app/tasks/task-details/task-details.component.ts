import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '@tasklist/api-interfaces';
import { TasksFacade } from '@tasklist/core-state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'tasklist-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  form: FormGroup;
  selectedTask$: Observable<Task> = this.tasksFacade.selectedTask$.pipe(
    tap((task) => this.form.patchValue(task))
  );


  constructor(
    private tasksFacade: TasksFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();

    const taskRouteId = this.route.snapshot.params['id'];

    if (taskRouteId) {
      this.loadTask(taskRouteId);
    }
  }

  loadTask(taskId: string) {
    this.tasksFacade.selectTask(taskId);
    this.tasksFacade.loadTask(taskId);
  }

  saveTask(formDirective: NgForm) {
    this.tasksFacade.saveTask(formDirective.value);
    this.cancel();
  }

  cancel() {
    this.reset();
    this.router.navigate(['/tasks']);
  }

  reset() {
    this.form.reset();
    this.tasksFacade.selectTask(null);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
    });
  }
}
