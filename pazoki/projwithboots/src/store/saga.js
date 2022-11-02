import { call, put, fork, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchInput } from "./API";
import { searchBoxActions } from "./SearchBoxSlice";
import { ASYNC_ACTION } from "./action";

function* onInputAsync(action) {
  try {
    const uInput = action.payload;

    const response = yield call(fetchInput, uInput);

    if (response.status === 200) {
      console.log(response.data.result.all.results.webs);
      yield put(
        searchBoxActions.setList(response.data.result.all.results.webs)
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadInput() {
  yield takeLatest(ASYNC_ACTION, onInputAsync);
}

export default onLoadInput;
