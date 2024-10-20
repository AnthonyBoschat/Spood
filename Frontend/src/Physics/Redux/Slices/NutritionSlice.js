import { createSlice } from '@reduxjs/toolkit';



export const nutritionSlice = createSlice({
  name: 'nutrition',
  initialState: {
    actions:{
        0:null,
        1:"Ajouter un ingrédient",
    },
    actionSelected:0,
  },
  reducers: {
    selectAction : (state, action) => {
        state.actionSelected = state.actionSelected === action.payload ? 0 : action.payload
    }
  },
});

export const { 
    selectAction
} = nutritionSlice.actions;

export const nutritionSliceReducer = nutritionSlice.reducer;