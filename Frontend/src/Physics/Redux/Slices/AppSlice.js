import { createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme:"light"
  },
  reducers: {
    switchTheme:(state,action) => {
        state.theme = state.theme === "light" ? "dark" : "light"
    }
  },
});

export const { 
    switchTheme
} = appSlice.actions;

export const appSliceReducer = appSlice.reducer;