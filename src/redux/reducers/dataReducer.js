import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from "../actions/actions";

const initialState = { isLoading: false, isLoaded: false, error: null, todos: [] };

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TODOS_REQUEST:
      return (state = { isLoading: true, isLoaded: false });
    case FETCH_TODOS_SUCCESS:
      return (state = { isLoading: false, isLoaded: true, todos: [...payload] });
    case FETCH_TODOS_FAILURE:
      return (state = { isLoading: false, isLoaded: false, error: payload });
    default:
      return state;
  }
};

export default dataReducer;
