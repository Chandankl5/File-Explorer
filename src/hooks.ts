import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store";

export const useAppState: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = useDispatch<AppDispatch>;