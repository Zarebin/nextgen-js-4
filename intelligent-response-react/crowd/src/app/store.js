import { configureStore} from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice";
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import rootSaga from './rootSaga.js'
import foodFactReducer from "../features/foodFact/foodFactSlice"
//import userReducer from './reducers';
 const persistConfig = {
  key: 'root',
  storage,
}
const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, userReducer)
export const store = configureStore({
  reducer: {
	  user:persistedReducer,
	  foodFact:foodFactReducer,
  },
	middleware:[sagaMiddleware] 
});

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
