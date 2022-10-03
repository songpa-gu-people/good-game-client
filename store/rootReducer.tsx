import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { alertModalState } from "./config/alertModal/slice";
import { AlertModalState } from "./config/alertModal/types";

export interface RootReducer {
  alertModalState: AlertModalState;
}

const combinedReducer = combineReducers({
  alertModalState: alertModalState,
});

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      return combinedReducer(state, action);
    }
  }
};
