export interface TaskListResponse {
  data?: DataTaskList[];
  meta?: MetaTask;
}

export interface DataTaskList {
  id?: number;
  title?: string;
  description?: string;
  completed?: string;
}

export interface MetaTask {
  total?: number;
  per_page?: number;
  current_page?: number;
  last_page?: number;
}