import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const login = (username, password) => (dispatch) => {
  
  if(username==="admin" && password==="admin"){
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: { user: username, passoword: password } },
    });
    return Promise.resolve();
  }else{
    dispatch({
      type: LOGIN_FAIL,
    });
    return Promise.reject();
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
