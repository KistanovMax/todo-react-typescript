export type Todo = {
  id: number;
  text: string;
  date: string;
  time: string;
  important: boolean;
};

export type Todos = {
  todos: Todo[];
};
