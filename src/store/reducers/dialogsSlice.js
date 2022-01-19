import { createSlice } from "@reduxjs/toolkit";
import { fetchDialog, fetchDialogs } from "../actionCreators/dialogsAC";

const initialState = {
   dialogs: [],
   isLoading: false,
   error: null
}

const dialogsSlice = createSlice({
   name: 'dialogs',
   initialState,
   extraReducers: {
      [fetchDialogs.fulfilled.type]: (state, action) => {
         state.dialogs = action.payload;
         state.isLoading = false;
         state.error = null;
      },

      [fetchDialogs.pending.type]: (state, action) => {
         state.isLoading = true;
      },

      [fetchDialogs.rejected.type]: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
      },
   }
})

export const dialogsReducer = dialogsSlice.reducer;