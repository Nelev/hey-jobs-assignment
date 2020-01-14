import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import userReducer from "./reducers/login";

export default combineReducers({
  form,
  user: userReducer,
  views: combineReducers({
    routing: routerReducer
  })
});
