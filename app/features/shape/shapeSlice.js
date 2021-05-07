import { createSlice } from "@reduxjs/toolkit";

export const shapeSlice = createSlice({
  name: "shape",
  initialState: {
    isDrawShape: false,
  },
  reducers: {
    setDraw: (state) => {
      state.isDrawShape = !state.isDrawShape;
    },
  },
});

export const { setDraw } = shapeSlice.actions;
export default shapeSlice.reducer;
