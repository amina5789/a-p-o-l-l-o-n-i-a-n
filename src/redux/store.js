import { configureStore } from "@reduxjs/toolkit";
import jewelryReducer from "./jewelrySlice";
import cartReducer from "./cartSlice"; 
import productReducer from "./productSlice"; 
import likeReducer from './LikeSlice';
import globalReducer from './globalSlice';
import giftReducer from './giftSlice';
import userReducer from './userSlice';
import giftDetailReducer from "./giftSlice";
import searchReducer from "./searchSlice";
import authReducer from "./authSlice";
import orderReducer from "./orderSlice";

export const store = configureStore({
  reducer: {
    jewelry: jewelryReducer,
    cart: cartReducer, 
    product: productReducer,  
    Like: likeReducer,
    global: globalReducer,
    gift: giftReducer,
    user: userReducer,
    giftDetail: giftDetailReducer,
    search: searchReducer,
    auth: authReducer,
    order: orderReducer,

  },
});
