import {
  AUTH_FORM_CHANGED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED
} from './types';

import firebase from 'firebase';

export const authFormChanged = ({ prop, value }) => {
  return {
    type: AUTH_FORM_CHANGED,
    payload: { prop, value }
  };
};

export const authLoginRequest = ({ email, passwd }) => {
  return (dispatch) => {
    dispatch({ type: AUTH_LOGIN_REQUEST });

    firebase.auth().signInWithEmailAndPassword(email, passwd)
      .then(user => loginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, passwd)
          .then(user => loginSuccess(dispatch, user))
          .catch(() => loginFailed(dispatch))
      });
  }
}

const loginSuccess = (dispatch, user) => {
  dispatch({ type: AUTH_LOGIN_SUCCESS, payload: user });
}

const loginFailed = (dispatch) => {
  dispatch({ type: AUTH_LOGIN_FAILED });
}
