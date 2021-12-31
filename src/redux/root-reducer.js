import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// Type of storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

/*
 * Redux persist config
 *  - key is where we want to persist in our store
 *  - storage is type of persist
 *  - whitelist is which from the store based from `key` level
 *              we want to persist
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
