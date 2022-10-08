import { fork } from "redux-saga/effects";
import registerSaga from "../features/user/saga";
import projectSaga from "../features/foodFact/saga";
import foodFactSaga from '../features/foodFact/saga'

export default function* rootSaga() {
  yield fork(registerSaga);
  yield fork(projectSaga);
  yield fork(foodFactSaga);
}
