import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from '../../api/UsersService';

export const setTheme = createAction('auth/setTheme');

export const fetchAuth = createAsyncThunk(
   'auth/fetchAuth',
   async (_, thunk) => {
      try {
         const theme = localStorage.getItem('theme');

         if (theme) {
            thunk.dispatch(setTheme(theme))
         };

         const res = await UsersService.auth();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка авторизации')
      }
   }
)

export const fetchReg = createAsyncThunk(
   'auth/fetchReg',
   async (body, thunk) => {
      try {
         const res = await UsersService.reg(body);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка регистрации')
      }
   }
)

export const fetchLogin = createAsyncThunk(
   'auth/fetchLogin',
   async (body, thunk) => {
      try {
         const res = await UsersService.login(body);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка входа')
      }
   }
)

export const fetchLogout = createAsyncThunk(
   'auth/fetchLogout',
   async (_, thunk) => {
      try {
         await UsersService.logout();
      } catch (err) {
         console.log(err)
      }
   }
)