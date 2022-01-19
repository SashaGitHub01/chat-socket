import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from '../actionCreators/userAC'

const initialState = {
   user: null,
   isLoading: false,
   error: null
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   extraReducers: {
      [fetchUser.fulfilled.type]: (state, action) => {
         state.user = action.payload;
         state.isLoading = false;
         state.error = null;
      },

      [fetchUser.pending.type]: (state, action) => {
         state.isLoading = true;
      },

      [fetchUser.rejected.type]: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
      },
   }
})

export const userReducer = userSlice.reducer;