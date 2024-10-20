import { combineReducers } from "@reduxjs/toolkit";
import { appSliceReducer } from "./Slices/AppSlice";
import { nutritionSliceReducer } from "./Slices/NutritionSlice";

const rootReducer = combineReducers({
    app:appSliceReducer,
    nutrition:nutritionSliceReducer
});

export default rootReducer