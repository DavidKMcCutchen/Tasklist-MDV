export interface Task {
  id: string;
  name: string;
  description: string;
};

export const emptyTask = {
  id: '',
  name: '',
  description: ''
};