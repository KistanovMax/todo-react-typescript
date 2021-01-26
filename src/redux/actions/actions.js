import axios from "axios";

export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const getTodos = () => {
  return function (dispatch) {
    axios.get("http://localhost:5000/todos").then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    });
  };
};

// export const getTodos = (data) => ({
//   type: GET_TODOS,
//   payload: data,
// });

export const addTodo = (text, date, time, important) => ({
  type: ADD_TODO,
  payload: { text, date, time, important },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
