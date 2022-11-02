import { configureStore } from "@reduxjs/toolkit";
import searchBoxActions from "./SearchBoxSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { search: searchBoxActions.reducer },
  middleware: [sagaMiddleware],
});

function configureMyStore() {
  sagaMiddleware.run(rootSaga);
  return { store };
}

export default configureMyStore();
