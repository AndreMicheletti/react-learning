import { FORM_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  email: '',
  password: '',
  loading: false,
  error: ''
};

export default authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FORM_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
