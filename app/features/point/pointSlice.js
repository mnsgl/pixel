import { createSlice } from "@reduxjs/toolkit";

export const pointSlice = createSlice({
  name: "points",
  initialState: {
    sPoint: [],
    ePoint: [],
  },
  reducers: {
    setSPoint: (state, payload) => {
      state.sPoint = payload;
    },
    setEPoint: (state, payload) => {
      console.log("say");
      state.ePoint = payload;
    },
  },
});

export const { setSPoint, setEPoint } = pointSlice.actions;
export default pointSlice.reducer;
