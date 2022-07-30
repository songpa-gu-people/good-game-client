import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

export interface RootReducer {}

const reducers: RootReducer = {};

const combinedReducer = combineReducers(reducers);

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      return combinedReducer(state, action);
    }
  }
};
