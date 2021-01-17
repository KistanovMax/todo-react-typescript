export interface Todo {
  id: number;
  text: string;
  date: string;
  time: string;
  important: boolean;
}

export interface Todos {
  todos: Todo[];
}
