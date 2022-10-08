import { call, put, takeEvery } from "redux-saga/effects";
import { SAMPLE_GET_PROJECT, SAMPLE_POST_PROJECT } from "./actions";
import { getProject, postProject } from "./api";
import { postProjectSlice, getProjectSlice } from "./foodFactSlice";
///get
function* getInfo(action) {
  console.log("You are saga on get info", action);
  const getProjectInfo = yield call(getProject);
  console.log(getProjectInfo);
  yield put(getProjectSlice(getProjectInfo));
}
//post
function* postInfo(action) {
  console.log("You are saga on post info", action);
  const postProjectInfo = yield call(postProject, action.info);
  console.log(postProjectInfo);
  yield put(postProjectSlice(postProjectInfo));
}
function* projectSaga() {
  yield takeEvery(SAMPLE_GET_PROJECT, getInfo);
  yield takeEvery(SAMPLE_POST_PROJECT, postInfo);
}

export default projectSaga;
