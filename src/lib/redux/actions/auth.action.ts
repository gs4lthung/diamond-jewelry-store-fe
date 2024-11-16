export const SIGNUP_SUCCESS = "auth/signUp/success";
export const SIGNUP_FAILURE = "auth/signUp/failure";
export const LOGIN_SUCCESS = "auth/signIn/success";
export const LOGIN_FAILURE = "auth/signIn/failure";
export const LOGOUT = "auth/logout";

export const signUpSuccess = (user: any) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error: string) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const loginSuccess = (userId: string, token: string) => ({
  type: LOGIN_SUCCESS,
  payload: { userId, token },
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
