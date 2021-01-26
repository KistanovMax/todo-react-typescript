import { GET_TODOS, ADD_TODO, DELETE_TODO } from "../actions/actions";

const initialState = [];

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
      return (state = [...payload]);
    case ADD_TODO:
      return (state = [...state, { ...payload }]);
    case DELETE_TODO:
      return (state = [...state.filter((todo) => todo.id !== payload)]);
    default:
      return state;
  }
};

export default dataReducer;
