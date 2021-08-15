import { createFeatureSelector, createSelector } from '@ngrx/store';
import { emptyTask } from '@tasklist/api-interfaces';
import { tasksAdapter, TasksState, TASKS_FEATURE_KEY } from './tasks.reducer';

export const getTasksState = createFeatureSelector<TasksState>(
  TASKS_FEATURE_KEY
);

const { selectAll, selectEntities } = tasksAdapter.getSelectors();

export const getTasksLoaded = createSelector(
  getTasksState,
  (state: TasksState) => state.loaded
);

export const getTasksError = createSelector(
  getTasksState,
  (state: TasksState) => state.error
);
export const getAllTasks = createSelector(getTasksState, (state: TasksState) =>
  selectAll(state)
);

export const getTaskEntities = createSelector(
  getTasksState,
  (state: TasksState) => selectEntities(state)
);

export const getSelectedTaskId = createSelector(
  getTasksState,
  (state: TasksState) => state.selectedId
);

export const getSelectedTask = createSelector(
  getTaskEntities,
  getSelectedTaskId,
  (entities, selectedId) => entities[selectedId] || emptyTask
);
