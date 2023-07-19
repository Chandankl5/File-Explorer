import { combineReducers } from "@reduxjs/toolkit";
import folderSlice from "./ducks/folderSlice";

const rootReducer = combineReducers({
  folder: folderSlice
})

export default rootReducer;