export interface Task {
  id: string;
  title: string;
  task: string;
  date: string;
  completed: boolean;
}

export interface NewTaskData {
  title: string;
  task: string;
  date: string;
}