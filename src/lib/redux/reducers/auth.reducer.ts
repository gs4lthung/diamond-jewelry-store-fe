import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/auth.action";

interface AuthState {
  userId: string | null;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  userId: null,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userId: null,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
