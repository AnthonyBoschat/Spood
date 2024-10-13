import { createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState: {
    theme:true
  },
  reducers: {
    switchTheme:(state,action) => {
        state.theme = !state.theme
    }
  },
});

export const { 
    switchTheme
} = appSlice.actions;

export const appSliceReducer = appSlice.reducer;