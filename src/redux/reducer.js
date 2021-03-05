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

export function logout(userObj) {
  return {
    type: LOGOUT_USER,
    payload: {},
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      return { ...state, user: payload };
    case LOGOUT_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
}
