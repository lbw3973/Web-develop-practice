import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
