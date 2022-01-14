import { createSlice } from "@reduxjs/toolkit";

const currentPageReducer = createSlice({
  name: "currentPageReducer",
  initialState: 1,
  reducers: {
    setCurrentPage: (state, action) => (state = action.payload),
  },
});

export default currentPageReducer.reducer;
export const { setCurrentPage } = currentPageReducer.actions;
