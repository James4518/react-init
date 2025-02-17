import { configureStore } from "@reduxjs/toolkit";
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from "react-redux";
import demoReducer from "./modules/demo";

const store = configureStore({
  reducer: {
    demo: demoReducer
  }
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppShallowEqual = shallowEqual;

export default store;
