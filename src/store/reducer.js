import actionTypes from './actionTypes';

const initialState = {
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.auth.CREATE_USER:
      return {
        ...state,
        user: action.val
      };
    case actionTypes.auth.GET_USER:
      return state.user;
    default:
      return state;
  }
};

export default reducer;