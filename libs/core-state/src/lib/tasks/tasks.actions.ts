import { Task } from '@tasklist/api-interfaces';
import { createAction, props } from '@ngrx/store';

// Select Entity

export const selectTask = createAction(
  '[TASKS] Select Task',
  props<{ taskId: string }>()
);

// Load All Entities

export const loadTasks = createAction('[TASKS] Load Tasks');

export const loadTasksSuccess = createAction(
  '[TASKS] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const loadTasksFailure = createAction(
  '[TASKS] Load Tasks Failure',
  props<{ error: any }>()
);

// Load Single Entiity

export const loadTask = createAction(
  '[TASKS] Load Task',
  props<{ taskId: string }>()
);

export const loadTaskSuccess = createAction(
  '[TASKS] Load Task Success',
  props<{ task: Task }>()
);

export const loadTaskFailure = createAction(
  '[TASKS] Load Task Failure',
  props<{ error: any }>()
);

// Update Entity

export const updateTask = createAction(
  '[TASKS] Create Task',
  props<{ task: Task }>()
);

export const updateTaskSuccess = createAction(
  '[TASKS] Create Task Success',
  props<{ task: Task }>()
);

export const updateTaskFailure = createAction(
  '[TASKS] Create Task Failure',
  props<{ error: any }>()
);

// Delete Entity

export const deleteTask = createAction(
  '[TASKS] Delete Task',
  props<{ taskId: string }>()
);

export const deleteTaskSuccess = createAction(
  '[TASKS] Delete Task Success',
  props<{ taskId: string }>()
);

export const deleteTaskFailure = createAction(
  '[TASKS] Delete Task Failure',
  props<{ error: any }>()
);

// Create Entity

export const createTask = createAction(
  '[TASKS] Update Task',
  props<{ task: Task }>()
);

export const createTaskSuccess = createAction(
  '[TASKS] Update Task Success',
  props<{ task: Task }>()
);

export const createTaskFailure = createAction(
  '[TASKS] Update Task Failure',
  props<{ error: any }>()
);
