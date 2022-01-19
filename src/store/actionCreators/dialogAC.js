import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { socket } from '../../socket'
import { DialogsService } from '../../api/DialogsService'
import { MessagesService } from "../../api/MessagesService";

export const addMessage = createAction('dialog/addMessage')

export const fetchDialog = createAsyncThunk(
   'dialog/fetchDialog',
   async (id, thunk) => {
      try {
         const res = await DialogsService.getOne(id);

         socket.emit('DIALOG:JOIN', res?.id)

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)

export const fetchCreateMsg = createAsyncThunk(
   'dialog/fetchCreateMsg',
   async (body, thunk) => {
      try {
         const res = await MessagesService.create(body);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)