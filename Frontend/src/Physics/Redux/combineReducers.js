import { combineReducers } from "@reduxjs/toolkit";
import { appSliceReducer } from "./Slices/AppSlice";

const rootReducer = combineReducers({
    app:appSliceReducer
});

export default rootReducer