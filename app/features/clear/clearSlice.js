import { createSlice } from "@reduxjs/toolkit";

export const clearSlice = createSlice({
  name: "clear",
  initialState: {
    clearCount: 0,
    eraser: false,
  },
  reducers: {
    clear: (state) => {
      state.clearCount += 1;
    },
    setEraser: (state) => {
      state.eraser = !state.eraser;
    },
  },
});

export const { clear, setEraser } = clearSlice.actions;
export default clearSlice.reducer;
