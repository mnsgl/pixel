import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: "size",
  initialState: {
    size: 3,
  },
  reducers: {
    increase: (state) => {
      if (state.size >= 10) {
        state.size;
      } else {
        state.size += 1;
      }
    },
    decrease: (state) => {
      if (state.size <= 1) {
        state.size;
      } else {
        state.size -= 1;
      }
      console.log(state.size);
    },
  },
});

export const { increase, decrease } = sizeSlice.actions;
export default sizeSlice.reducer;
