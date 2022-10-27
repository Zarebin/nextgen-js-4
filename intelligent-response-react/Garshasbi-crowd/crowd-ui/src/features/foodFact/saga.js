import { takeEvery, call, put } from "redux-saga/effects";
import { GET_INFO, POST_REQ } from "./action";
import { getInfo, postReq } from "./api";
import { getInfoSlice, postReqSlice } from "./foodFactSlice";

function* getFoodFactInfo(action) {
  const foodFactInfo = yield call(getInfo);
  yield put(getInfoSlice(foodFactInfo));
}

function* postRequest(action) {
  const reqInfo = yield call(postReq, action.info);
  yield put(postReqSlice(reqInfo));
}

function* foodFactSaga() {
  yield takeEvery(GET_INFO, getFoodFactInfo);
  yield takeEvery(POST_REQ, postRequest);
}

export default foodFactSaga;
