import axios from "axios";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_TODOS_REQUEST,
    });
    try {
      await axios.get("/todos").then(({ data }) => {
        dispatch({
          type: FETCH_TODOS_SUCCESS,
          payload: data,
        });
      });
    } catch ({ message }) {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        payload: message,
      });
    }
  };
};
