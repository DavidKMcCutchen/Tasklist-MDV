import { Injectable } from '@angular/core';
import { TasksService } from '@tasklist/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import * as TasksActions from './tasks.actions';
import { Task } from '@tasklist/api-interfaces';

@Injectable()
export class TasksEffects {
  loadTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTask),
      fetch({
        run: (action) =>
          this.tasksService
            .find(action.taskId)
            .pipe(
              map((task: Task) => TasksActions.loadTaskSuccess({ task }))
            ),
        onError: (action, error) => TasksActions.loadTaskFailure({ error }),
      })
    )
  );

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTasks),
      fetch({
        run: () =>
          this.tasksService
            .all()
            .pipe(
              map((tasks: Task[]) =>
                TasksActions.loadTasksSuccess({ tasks })
              )
            ),
        onError: (action, error) => TasksActions.loadTaskFailure({ error })
      })
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.updateTask),
      pessimisticUpdate({
        run: (action) =>
          this.tasksService
            .update(action.task)
            .pipe(
              map((task: Task) => TasksActions.updateTaskSuccess({ task }))
            ),
        onError: (action, error) =>
          TasksActions.updateTaskFailure({ error }),
      })
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.deleteTask),
      pessimisticUpdate({
        run: (action) =>
          this.tasksService
            .delete(action.taskId)
            .pipe(
              map(() =>
                TasksActions.deleteTaskSuccess({ taskId: action.taskId })
              )
            ),
        onError: (action, error) =>
          TasksActions.deleteTaskFailure({ error }),
      })
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.createTask),
      pessimisticUpdate({
        run: (action) =>
          this.tasksService
            .create(action.task)
            .pipe(
              map((task: Task) => TasksActions.createTaskSuccess({ task }))
            ),
        onError: (action, error) =>
            TasksActions.createTaskFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private tasksService: TasksService
  ) {}
}
