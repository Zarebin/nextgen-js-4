import { fork } from "redux-saga/effects";
import onLoadInput from "./saga";

export default function* rootSaga() {
  yield fork(onLoadInput);
}
