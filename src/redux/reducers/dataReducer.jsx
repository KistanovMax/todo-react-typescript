import { TODOS } from "../../api/data";

const dataReducer = (state = TODOS, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO":
      return (state = [...state, { ...payload }]);
    case "DELETE_TODO":
      return (state = [...state.filter((todo) => todo.id !== payload)]);
    default:
      return state;
  }
};

export default dataReducer;
