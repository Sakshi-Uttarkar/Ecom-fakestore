import { createStore,compose,applyMiddleware, combineReducers } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk"

const store = createStore(rootReducers,compose(applyMiddleware(thunk)));

export default store;
