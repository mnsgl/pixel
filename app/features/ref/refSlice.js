import { createSlice } from "@reduxjs/toolkit";

export const refSlice = createSlice({
  name: "refs",
  initialState: {
    refs: {},
  },
  reducers: {
    addToRefs: (state, payload) => {
      state.refs[payload.name] = payload.ref;
    },
  },
});

export const { addToRefs } = refSlice.actions;
export default refSlice.reducer;
