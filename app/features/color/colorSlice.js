import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    color: "white",
    colors: [
      "yellow",
      "red",
      "blue",
      "orange",
      "pink",
      "magenta",
      "indigo",
      "brown",
    ],
  },
  reducers: {
    setColor: (state, payload) => {
      state.color = payload.payload;
    },
    setColors: (state, payload) => {
      state.colors = payload.payload;
    },
    addColors: (state, payload) => {
      if (!state.colors.find((val) => val === payload.payload))
        state.colors = [...state.colors, payload.payload];
    },
  },
});

export const { setColor, addColors, setColors } = colorSlice.actions;
export default colorSlice.reducer;
