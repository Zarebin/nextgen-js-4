import { configureStore } from "@reduxjs/toolkit";
import foodFactReducer from "../features/foodFact/foodFactSlice";
import usersReducer from "../features/users/usersSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    foodFact: foodFactReducer,
    users: usersReducer,
  },
  middleware: [sagaMiddleware],
});

function configureMyStore() {
  sagaMiddleware.run(rootSaga);
  return { store };
}

export default configureMyStore;
