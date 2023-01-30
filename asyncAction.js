const redux = require("redux");
const createStore = redux.createStore;

// Action

const FECTH_USER_REQ = "FECTH_USER_REQ";
const FECTH_USER_SUCCESS = "FECTH_USER_SUCCESS";
const FECTH_USER_ERROR = "FECTH_USER_ERROR";

// State
const initialUser = {
  loading: false,
  user: [],
  error: "",
};

// Funtion
const fecthUserReq = () => {
  return {
    type: FECTH_USER_REQ,
  };
};

const fecthUserSuccess = (user) => {
  return {
    type: FECTH_USER_REQ,
    payload: user,
  };
};

const fecthUserError = (error) => {
  return {
    type: FECTH_USER_REQ,
    payload: error,
  };
};

// Reducer
const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case FECTH_USER_REQ:
      return {
        ...state,
        loading: true,
      };
    case FECTH_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FECTH_USER_ERROR:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
  }
};

// Store
const store = createStore(userReducer);

console.log();
