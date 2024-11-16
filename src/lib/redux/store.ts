import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import AuthenticationSlice from "./slice/authSlice";
import RoleSlice from "./slice/roleSlice";
import authReducer from "./reducers/auth.reducer";
// import listAllServiceSlice from './slice/listAllServiceSlice';
// import userSlice from './slice/userSlice';
// import shopSlice from './slice/shopSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// export const store = configureStore({
//   reducer: {
//     // auth: AuthenticationSlice,
//     // role: RoleSlice,
//     // service: listAllServiceSlice,
//     // user: userSlice,
//     // shop: shopSlice,
//   },
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
