import { createSlice } from "@reduxjs/toolkit";
import { addMessage, fetchCreateMsg, fetchDialog } from '../actionCreators/dialogAC';

const initialState = {
   dialog: null,
   isLoading: false,
   messages: [],
   error: null
}

const dialogSlice = createSlice({
   name: 'dialog',
   initialState,
   extraReducers: {
      [fetchDialog.fulfilled.type]: (state, action) => {
         state.dialog = action.payload;
         state.messages = action.payload.messages
         state.isLoading = false;
         state.error = null;
      },

      [fetchDialog.pending.type]: (state, action) => {
         state.isLoading = true;
      },

      [fetchDialog.rejected.type]: (state, action) => {
         state.isLoading = false;
         state.messages = null;
         state.dialog = null;
         state.error = action.payload;
      },

      [addMessage]: (state, action) => {
         state.messages.push(action.payload)
      },
   }
})

export const dialogReducer = dialogSlice.reducer;