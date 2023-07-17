import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "./store";
import { useState } from "react";

export const useAppState: TypedUseSelectorHook<AppState> = useState;
export const useAppDispatch = useDispatch<AppDispatch>;