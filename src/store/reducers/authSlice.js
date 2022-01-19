import { createSlice } from "@reduxjs/toolkit";
import { fetchAuth, fetchLogin, fetchLogout, fetchReg, setTheme } from "../actionCreators/authAC";

const initialState = {
   user: null,
   theme: 'light',
   isInitialized: false,
   loginProcess: false,
   loginError: null,
   regError: null,
   isAuth: false,
   error: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   extraReducers: {
      // THEME
      [setTheme]: (state, action) => {
         state.theme = action.payload
      },
      // AUTH
      [fetchAuth.fulfilled.type]: (state, action) => {
         state.user = action.payload;
         state.error = null;
         state.isInitialized = true;
         state.isAuth = true
      },

      [fetchAuth.rejected.type]: (state, action) => {
         state.error = action.payload;
         state.isInitialized = true;
         state.user = null;
         state.isAuth = false
      },

      // LOGIN
      [fetchLogin.fulfilled.type]: (state, action) => {
         state.user = action.payload;
         state.loginError = null;
         state.loginProcess = false;
         state.isAuth = true
      },

      [fetchLogin.rejected.type]: (state, action) => {
         state.user = null;
         state.loginError = action.payload;
         state.loginProcess = false;
         state.isAuth = false

      },

      [fetchLogin.pending.type]: (state, action) => {
         state.loginProcess = true;
      },

      // REG
      [fetchReg.fulfilled.type]: (state, action) => {
         state.user = action.payload;
         state.regError = null;
         state.loginProcess = false;
         state.isAuth = true
      },

      [fetchReg.rejected.type]: (state, action) => {
         state.user = null;
         state.regError = action.payload;
         state.loginProcess = false;
         state.isAuth = false
      },

      [fetchReg.pending.type]: (state, action) => {
         state.loginProcess = true;
      },

      // LOGOUT
      [fetchLogout.pending.type]: (state, action) => {
         state.user = null;
         state.isAuth = false;
         state.error = null;
      },
   }
})

export const authReducer = authSlice.reducer;