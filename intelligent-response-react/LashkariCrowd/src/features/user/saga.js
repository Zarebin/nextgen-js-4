import {takeEvery,put,call} from 'redux-saga/effects'
import { GET_USER_LOGIN,REGISTER_USER } from './actions'
import {fetchUser,registerUser} from './userAPI';
import {addUser} from './userSlice';
//import {login} from "./userAPI"

function* handleLoginSaga(action){
	const user = yield call(fetchUser,action.payload);
	yield put (addUser(user.data));
}

function* handleRegisterSaga(action){
	const registerData = yield call(registerUser,action.payload);
	yield put (addUser(registerData.data));
}

function* loginSaga() {
	yield takeEvery (GET_USER_LOGIN, handleLoginSaga);
	yield takeEvery (REGISTER_USER, handleRegisterSaga);
}

export default loginSaga;
