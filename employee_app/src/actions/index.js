export const formChanged = (prop, value) => {
  return {
    type: 'form_changed'
    payload: { prop, value }
  };
};
