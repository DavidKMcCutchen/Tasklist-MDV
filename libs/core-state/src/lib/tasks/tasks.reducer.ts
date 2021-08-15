import { Task } from '@tasklist/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as TasksActions from './tasks.actions';

export const TASKS_FEATURE_KEY = 'tasks';

export interface TasksState extends EntityState<Task> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface TasksPartialState {
  readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const tasksAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialTasksState: TasksState = tasksAdapter.getInitialState({
  loaded: false,
});

const onFailure = (state, { error }): TasksState => ({ ...state, error });

const onDispatch = (state, action): TasksState => ({
  ...state,
  loaded: false,
  error: null,
});

const _tasksReducer = createReducer(
  initialTasksState,
  on(
    TasksActions.loadTaskFailure,
    TasksActions.loadTasksFailure,
    TasksActions.deleteTaskFailure,
    TasksActions.updateTaskFailure,
    TasksActions.createTaskFailure,
    onFailure
  ),
  on(
    TasksActions.loadTask,
    TasksActions.loadTasks,
    TasksActions.deleteTask,
    TasksActions.updateTask,
    TasksActions.createTask,
    onDispatch
  ),
  on(TasksActions.loadTaskSuccess, (state, { task }) =>
    tasksAdapter.upsertOne(task, { ...state, loaded: true })
  ),
  on(TasksActions.selectTask, (state, { taskId }) => ({
    ...state,
    selectedId: taskId,
  })),
  on(TasksActions.loadTasksSuccess, (state, { tasks }) =>
    tasksAdapter.setAll(tasks, { ...state, loaded: true })
  ),
  on(TasksActions.selectTask, (state, { taskId }) => ({
    ...state,
    selectedId: taskId,
  })),
  on(TasksActions.loadTasksSuccess, (state, { tasks }) =>
    tasksAdapter.setAll(tasks, { ...state, loaded: true })
  ),
  on(TasksActions.deleteTaskSuccess, (state, { taskId }) =>
    tasksAdapter.removeOne(taskId, { ...state, loaded: true })
  ),
  on(TasksActions.updateTaskSuccess, (state, { task }) =>
    tasksAdapter.updateOne(
      { id: task.id, changes: task },
      { ...state, loaded: true }
    )
  ),
  on(TasksActions.createTaskSuccess, (state, { task }) =>
    tasksAdapter.addOne(task, { ...state, loaded: true })
  )
);

export function tasksReducer(state: TasksState | undefined, action: Action) {
  return _tasksReducer(state, action);
}
