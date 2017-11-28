import {
  AUTH_FORM_CHANGED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  email: '',
  passwd: '',
  loading: false,
  error: ''
};

export default authReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch(action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...INITIAL_STATE, loading: true, error: false };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        passwd: '',
        email: '',
        user: action.payload
      };
    case AUTH_LOGIN_FAILED:
      return { ...INITIAL_STATE, error: "Authentication Failed." };
    case AUTH_FORM_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
