// @flow
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import connect from "../db";


const persistConfig = {
    key: "root",
    storage
};
const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore(onCompletion: () => void): any {
  const enhancer = composeWithDevTools(
    applyMiddleware(thunk),
  );

  const store = createStore(persistedReducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
