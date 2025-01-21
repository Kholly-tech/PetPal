import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
// import store from "../store";

const token = Cookies.get('access_token');

const init = {
    isAuthenticated: !!token,
    currentUser: [],
}

const authSlice = createSlice({
  name: "authSlice",
  initialState: init,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setIsAuthenticated(state,action) {
        state.isAuthenticated = action.payload;
    },
    updateUser(state, action) {
        state.currentUser = { ...state.currentUser, ...action.payload};
    },
  },
});

export const {
    setCurrentUser,
    updateUser,
    setIsAuthenticated
} = authSlice.actions;

export default authSlice.reducer;