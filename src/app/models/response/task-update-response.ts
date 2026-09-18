export interface TaskUpdateResponse {
  data?: DataTaskUpdate;
}

export interface DataTaskUpdate {
  id?: number;
  title?: string;
  description?: string;
  completed?: string;
}
