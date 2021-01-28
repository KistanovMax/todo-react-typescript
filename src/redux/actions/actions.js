import axios from "axios";

export const GET_TODOS = "GET_TODOS";

export const getTodos = () => {
  return async (dispatch) => {
    await axios.get("http://localhost:5000/todos").then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    });
  };
};

export const addTodo = (text, date, time, important) => {
  return async (dispatch) => {
    await axios.post("http://localhost:5000/todos", { text, date, time, important });
    await axios.get("http://localhost:5000/todos").then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    await axios.get("http://localhost:5000/todos").then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    });
  };
};
