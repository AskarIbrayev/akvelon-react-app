// typed versions of the useDispatch and useSelector

import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";


export const useAppDistpatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;