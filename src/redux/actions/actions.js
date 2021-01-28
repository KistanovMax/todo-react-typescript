import axios from "axios";

export const GET_TODOS = "GET_TODOS";

export const getTodos = () => {
  return async (dispatch) => {
    await axios.get("/todos").then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    });
  };
};

export const addTodo = (text, date, time, important) => {
  return async (dispatch) => {
    await axios.post("/todos", { text, date, time, important });
    await axios.get("/todos").then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    });
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    await axios.delete(`/todos/${id}`);
    await axios.get("/todos").then(({ data }) => {
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    });
  };
};
