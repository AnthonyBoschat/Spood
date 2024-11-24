import { createSlice } from '@reduxjs/toolkit';



export const nutritionSlice = createSlice({
  name: 'nutrition',
  initialState: {
    actions:{
        0:null,
        1:"Ajouter un ingrédient",
    },
    actionSelected:0,
    ingredients:[],
  },
  reducers: {
    selectAction : (state, action) => {
        state.actionSelected = state.actionSelected === action.payload ? 0 : action.payload
    },
    setIngredients : (state, action) => {
      state.ingredients = action.payload
    },
    addIngredient : (state,action) => {
      state.ingredients.push(action.payload)
    }
  },
});

export const { 
    selectAction,
    setIngredients,
    addIngredient
} = nutritionSlice.actions;

export const nutritionSliceReducer = nutritionSlice.reducer;