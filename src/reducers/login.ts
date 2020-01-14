import { LOGIN_ERROR } from "../actions/login";
import { LOGIN_START } from "../actions/login";
import { LOGIN_SUCCESS } from "../actions/login";
import { LOGOUT } from "../actions/login";

import { IUser } from "../model/IUser";

export interface ILoginStoreProps {
  isLogging: boolean;
  errorLogin: string;
  logged: boolean;
  user: IUser;
}

const defaultState = {
  isLogging: false,
  errorLoggin: null,
  logged: false,
  user: null
};

export default (state = defaultState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLogging: true,
        errorLogging: null,
        user: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        logged: true,
        user: payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLogging: false,
        errorLogging: payload,
        user: null
      };
    case LOGOUT:
      return {
        ...state,
        isLogging: false,
        logged: false,
        user: payload
      };
    default:
      return state;
  }
};
