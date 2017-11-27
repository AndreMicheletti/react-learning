import { FORM_CHANGED } from './types';

export const formChanged = (prop, value) => {
  return {
    type: FORM_CHANGED,
    payload: { prop, value }
  };
};
