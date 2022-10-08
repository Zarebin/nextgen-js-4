import {takeEvery,put,call} from 'redux-saga/effects'
import { GET_First_Case, Send_Respond_Value } from './foodFactActions'
import {fetchFirstCase , sendRespondToServer} from './foodFactAPI';
import {addQusestion, addStatus} from './foodFactSlice';
//import {login} from "./userAPI"

function* handleFirstCase(action){
	const firstItem = yield call(fetchFirstCase,action.payload);
	yield put(addQusestion(firstItem.data));
}

function* handleSendRespondValue(action){
	console.log(action.payload)
    const response = yield call(sendRespondToServer,action.payload);
	yield put(addQusestion(response.data));
}

function* foodFactSaga() {
	yield takeEvery (GET_First_Case, handleFirstCase);
	yield takeEvery (Send_Respond_Value,handleSendRespondValue);
}

export default foodFactSaga;
