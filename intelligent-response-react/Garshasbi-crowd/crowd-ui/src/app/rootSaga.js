import { fork } from "redux-saga/effects";
import foodFactSaga from '../features/foodFact/saga'
import usersSaga from "../features/users/saga";

export default function* rootSaga() {
  yield fork(foodFactSaga)
  yield fork(usersSaga);
}
