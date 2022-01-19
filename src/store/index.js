import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { dialogsReducer } from "./reducers/dialogsSlice";
import { dialogReducer } from "./reducers/dialogSlice";
import { userReducer } from "./reducers/userSlice";
import { usersReducer } from "./reducers/usersSlice";

const rootReducer = combineReducers({
   auth: authReducer,
   dialogs: dialogsReducer,
   dialog: dialogReducer,
   user: userReducer,
   users: usersReducer
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}