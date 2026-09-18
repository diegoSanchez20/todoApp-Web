export interface TaskCompleteResponse {
  data?: DataTaskComplete;
}

export interface DataTaskComplete {
  id?: number;
  title?: string;
  description?: string;
  completed?: string;
}
