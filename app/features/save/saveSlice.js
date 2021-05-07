import { createSlice } from "@reduxjs/toolkit";

export const saveSlice = createSlice({
  name: "save",
  initialState: {
    save: 0,
    cellColors: {
      14: "white",
      15: "white",
      16: "white",
      17: "white",
      23: "white",
      27: "white",
      28: "white",
      38: "white",
      39: "white",
      49: "white",
      410: "white",
      510: "white",
      610: "white",
      611: "white",
      711: "white",
      811: "white",
      11: "white",
      713: "orange",
    },
  },
  reducers: {
    setCellColors: (state, payload) => {
      state.cellColors[payload.payload.index] = payload.payload.cellColor;
    },
    setIncreaseSaveValue: (state) => {
      state.save += 1;
    },
  },
});

export const { setCellColors, setIncreaseSaveValue } = saveSlice.actions;
export default saveSlice.reducer;
