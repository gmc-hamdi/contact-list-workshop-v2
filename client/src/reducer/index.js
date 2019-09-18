import { IS_LOADING, GET_CONTACT } from "../actions/action_types";
const initialState = {
  isLoading: false,
  contact: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return { isLoading: false, contact: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
