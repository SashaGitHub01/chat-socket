import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from '../../api/UsersService'

export const fetchUser = createAsyncThunk(
   'user/fetchUser',
   async (id, thunk) => {
      try {
         const res = await UsersService.getOne(id)

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)