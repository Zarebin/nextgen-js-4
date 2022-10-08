import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import projectReducer from "../features/foodFact/foodFactSlice";
import foodFactReducer from '../features/foodFact/foodFactSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user: userReducer,
    foodFact: foodFactReducer,
    project: projectReducer,
  },
  middleware: [sagaMiddleware],
});

function configureMyStore() {
  sagaMiddleware.run(rootSaga);
  return { store };
}
export default configureMyStore;
