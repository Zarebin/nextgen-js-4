import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN_USERS, LOGOUT_USERS, REGISTER_USERS } from "./actions";
import { login, register, logout } from "./api";
import { logUsers, regUsers, remUsers } from "./usersSlice";

function* loginUsers(action) {
  const loginInfo = yield call(login, action.loginInfo);
  yield put(logUsers(loginInfo));
}

function* registerUsers(action) {
  const registerInfo = yield call(register, action.userInfo);
  yield put(regUsers(registerInfo));
}

function* logoutUsers(action) {
  const logoutInfo = yield call(logout);
  yield put(remUsers(logoutInfo));
}

function* usersSaga() {
  yield takeEvery(LOGIN_USERS, loginUsers);
  yield takeEvery(REGISTER_USERS, registerUsers);
  yield takeEvery(LOGOUT_USERS, logoutUsers);
}

export default usersSaga;
