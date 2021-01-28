import { GET_TODOS } from "../actions/actions";

const initialState = [];

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODOS:
      return (state = [...payload]);
    default:
      return state;
  }
};

export default dataReducer;
