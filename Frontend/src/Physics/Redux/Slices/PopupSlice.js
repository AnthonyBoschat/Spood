import { createSlice } from '@reduxjs/toolkit';



export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    message:"",
    active:false,
    success:true,
  },
  reducers: {
    addPopup:(state,action) => {
        const {message, success} = action.payload
        state.message = message
        state.success = success
        state.active = true
    },
    clearPopup:(state,action) => {
      state.active = false
      state.message = ""
    }
  },
});

export const { 
  addPopup,
  clearPopup
} = popupSlice.actions;

export const popupSliceReducer = popupSlice.reducer;