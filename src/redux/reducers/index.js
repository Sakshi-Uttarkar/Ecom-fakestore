import handleCart from "./handCart";
import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
import { checkoutReducer } from "./checkoutReducer";


const rootReducers = combineReducers({
  handleCart,
   ProductReducer,
   checkout:checkoutReducer,
});

export default rootReducers;
