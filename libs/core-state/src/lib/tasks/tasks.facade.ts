import { Injectable } from '@angular/core';
import { Task } from '@tasklist/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as TasksActions from './tasks.actions';
import * as fromTasks from './tasks.reducer';
import * as TasksSelectors from './tasks.selectors';

@Injectable({
  providedIn: 'root',
})
export class TasksFacade {
  allTasks$ = this.store.pipe(select(TasksSelectors.getAllTasks));
  selectedTask$ = this.store.pipe(select(TasksSelectors.getSelectedTask));
  loaded$ = this.store.pipe(select(TasksSelectors.getTasksLoaded));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === TasksActions.createTask({} as any).type ||
        action.type === TasksActions.deleteTask({} as any).type ||
        action.type === TasksActions.updateTask({} as any).type
    )
  );

  selectTask(taskId: string) {
    this.dispatch(TasksActions.selectTask({ taskId }));
  }

  loadTasks() {
    this.dispatch(TasksActions.loadTasks());
  }

  loadTask(taskId: string) {
    this.dispatch(TasksActions.loadTask({ taskId }));
  }
  
  saveTask(task: Task) {
    task?.id ? this.updateTask(task) : this.createTask(task);
  }

  updateTask(task: Task) {
    this.dispatch(TasksActions.updateTask({ task }));
  }

  createTask(task: Task) {
    this.dispatch(TasksActions.createTask({ task }));
  }

  deleteTask(taskId: string) {
    this.dispatch(TasksActions.deleteTask({ taskId }))
  }


  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromTasks.TasksPartialState>,
    private actions$: ActionsSubject
  ) {}
}
