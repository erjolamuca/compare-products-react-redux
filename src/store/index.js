import { createStore, combineReducers } from "redux";
import ProductsReducer from "../reducers/ProductsReducer.js";

const reducers = combineReducers({
  products: ProductsReducer
});

const store = createStore(reducers);

export default store;
