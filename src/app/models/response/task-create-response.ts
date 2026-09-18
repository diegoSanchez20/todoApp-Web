export interface TaskCreateResponse {
  data?: DataTaskCreate;
}

export interface DataTaskCreate {
  id?: number;
  title?: string;
  description?: string;
  completed?: string;
}
