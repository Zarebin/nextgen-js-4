import { call, put, takeEvery } from "redux-saga/effects";
import {
  SAMPLE_SET_REGISTER,
  SAMPLE_SET_LOGIN,
  SAMPLE_SET_LOGOUT,
} from "./actions";
import { login, register, logout } from "./api";
import { addRegisterUsers, addLoginUsers, addLogoutUsers } from "./userSlice";
///register
function* registerUser(action) {
  console.log("You are saga", action);
  const registerInfo = yield call(register, action.userInfo);
  console.log(registerInfo);
  yield put(addRegisterUsers(registerInfo));
}
///logout
function* logOutUser(action) {
  console.log("You are saga", action);
  const logoutInfo = yield call(logout);
  console.log(logoutInfo);
  yield put(addLogoutUsers(logoutInfo));
}
////login
function* loginUser(action) {
  console.log("You are saga", action);
  const loginInfo = yield call(login, action.loginInfo);
  console.log(loginInfo);
  yield put(addLoginUsers(loginInfo));
}
///rootSaga
function* registerSaga() {
  yield takeEvery(SAMPLE_SET_REGISTER, registerUser);
  yield takeEvery(SAMPLE_SET_LOGIN, loginUser);
  yield takeEvery(SAMPLE_SET_LOGOUT, logOutUser);
}
export default registerSaga;
