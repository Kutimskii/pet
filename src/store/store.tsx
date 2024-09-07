import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "../components/Abaka/PlayerSlice/PlayerSlice"; 
export const store = configureStore({
  reducer:{
    create: PlayerSlice,
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch