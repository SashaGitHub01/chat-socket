import { createAsyncThunk } from '@reduxjs/toolkit'
import { UsersService } from '../../api/UsersService'

export const fetchUsers = createAsyncThunk(
   'users/fetchUsers',
   async (_, thunk) => {
      try {
         const res = await UsersService.getAll()

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка')
      }
   }
)