import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../apis/axios";
import { setCookie } from "../../utils/cookies";

const initialState = {
  loading: false,
  userInfo: {},
  isAuthenicated: "PENDING",
};

export const login = createAsyncThunk("auth/login", async (user) => {
  const response = await axiosInstance.post("api/auth/login", user);
  return response.data;
});

export const register = createAsyncThunk("auth/register", async (user) => {
  const response = await axiosInstance.post("api/auth/register", user);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.isAuthenicated = "PENDING";
    },
    [login.fulfilled]: (state, action) => {
      setCookie("accessToken", action.payload.accessToken, { path: "/" });
      state.loading = false;
      state.userInfo = { userId: action.payload.id, userName: action.payload.userName };
      state.isAuthenicated = "SUCCESS";
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.isAuthenicated = "FAILED";
    },
    [register.pending]: (state) => {
      state.loading = true;
      state.isAuthenicated = "PENDING";
    },
    [register.fulfilled]: (state, action) => {
      setCookie("accessToken", action.payload.accessToken, { path: "/" });
      state.loading = false;
      state.userInfo = { userId: action.payload.id, userName: action.payload.userName };
      state.isAuthenicated = "SUCCESS";
    },
    [register.rejected]: (state) => {
      state.loading = false;
      state.isAuthenicated = "FAILED";
    },
  },
});

export default authSlice.reducer;
