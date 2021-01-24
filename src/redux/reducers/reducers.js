import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const reducers = combineReducers({
  Data: dataReducer,
});

export default reducers;
