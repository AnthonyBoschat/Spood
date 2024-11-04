import { combineReducers } from "@reduxjs/toolkit";
import { appSliceReducer } from "./Slices/AppSlice";
import { nutritionSliceReducer } from "./Slices/NutritionSlice";
import { popupSliceReducer } from "./Slices/PopupSlice";

const rootReducer = combineReducers({
    app:appSliceReducer,
    nutrition:nutritionSliceReducer,
    popup:popupSliceReducer
});

export default rootReducer