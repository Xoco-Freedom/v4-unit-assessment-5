const { useReducer } = require("react");

const UPDATE_USER = "UPDATE_USER";
const LOGOUT_USER = "LOGOUT_USER";

const initialState = {
  user: {},
};

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj,
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      return { ...state, user: payload };
    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
}
