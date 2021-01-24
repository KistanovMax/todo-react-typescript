export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (id, text, date, time, important) => ({
  type: ADD_TODO,
  payload: { id, text, date, time, important },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
