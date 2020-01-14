import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import jobsReducer from "./reducers/jobs";
import userReducer from "./reducers/login";

export default combineReducers({
  form,
  user: userReducer,
  jobs: jobsReducer,
  views: combineReducers({
    routing: routerReducer
  })
});
