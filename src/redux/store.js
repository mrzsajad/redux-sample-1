import { combineReducers, legacy_createStore as createStore } from "redux";
import { changeNumber } from "./reducer";
const reducers = combineReducers({ number:changeNumber });

const store = createStore(reducers);
export default store;
