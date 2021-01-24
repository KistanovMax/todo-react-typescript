import data from "../../api/data.json";
import { ADD_TODO, DELETE_TODO } from "../actions/actions";

const dataReducer = (state = data, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return (state = [...state, { ...payload }]);
    case DELETE_TODO:
      return (state = [...state.filter((todo) => todo.id !== payload)]);
    default:
      return state;
  }
};

export default dataReducer;
