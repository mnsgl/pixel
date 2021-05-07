import { createSlice } from "@reduxjs/toolkit";

export const drawSlice = createSlice({
  name: "draw",
  initialState: {
    isDraw: false,
  },
  reducers: {
    active: (state) => {
      state.isActive = true;
    },
    deactive: (state) => {
      state.isActive = false;
    },
  },
});

export const { active, deactive } = drawSlice.actions;
export default drawSlice.reducer;
