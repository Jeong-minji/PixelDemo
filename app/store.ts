import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "../features/User/UserSlice";
import currentPageReducer from "../features/CurrentPage/CurrentPageReducer";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    currentPage: currentPageReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
