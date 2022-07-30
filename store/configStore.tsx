import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";
import { Task } from "redux-saga";

declare module "redux" {
  export interface Store {
    sagaTask?: Task;
  }
}

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
