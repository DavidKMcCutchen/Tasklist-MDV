import { ActionReducerMap } from "@ngrx/store";

import * as fromTasks from './tasks/tasks.reducer';

export interface AppState {
  [fromTasks.TASKS_FEATURE_KEY]: fromTasks.TasksState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromTasks.TASKS_FEATURE_KEY]: fromTasks.tasksReducer
};

//---------------------------------------
// Common Selectors
//---------------------------------------
