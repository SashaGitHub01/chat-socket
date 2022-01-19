import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../actionCreators/usersAC'

const initialState = {
   users: [],
   isLoading: false,
   error: null
}

const usersSlice = createSlice({
   name: "users",
   initialState,
   extraReducers: {
      [fetchUsers.fulfilled.type]: (state, action) => {
         state.users = action.payload;
         state.isLoading = false;
         state.error = null;
      },

      [fetchUsers.rejected.type]: (state, action) => {
         state.error = action.payload;
         state.isLoading = false;
      },

      [fetchUsers.pending.type]: (state, action) => {
         state.isLoading = true
      },
   }
})

export const usersReducer = usersSlice.reducer