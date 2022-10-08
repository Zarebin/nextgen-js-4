import { fork } from "redux-saga/effects";
import userSaga from "../features/user/saga"
import foodFactSaga from "../features/foodFact/saga";
export default function* rootSaga (){
	yield fork(userSaga);
	yield fork(foodFactSaga)
} 
