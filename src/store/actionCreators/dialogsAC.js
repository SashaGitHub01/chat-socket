import { createAsyncThunk } from "@reduxjs/toolkit";
import { DialogsService } from '../../api/DialogsService'

export const fetchDialogs = createAsyncThunk(
   'dialogs/fetchDialogs',
   async (_, thunk) => {
      try {
         const res = await DialogsService.getAll();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)