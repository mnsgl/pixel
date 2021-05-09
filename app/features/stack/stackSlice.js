import { createSlice } from "@reduxjs/toolkit";

export const stackSlice = createSlice({
  name: "stack",
  initialState: {
    cur_value: null,
    MAX_SIZE: 15,
    cur_size: 0,
    stack: [],
  },
  reducers: {
    addToStack: (state, payload) => {
      console.log("geldi : ", payload.payload);
      if (state.cur_size >= state.MAX_SIZE) {
        state.stack.shift();
        state.cur_size -= 1;
      }
      let empty_obj = {};
      empty_obj[payload.payload.index] = payload.payload.color;
      state.stack.push(empty_obj);
      state.cur_size += 1;
    },
    getFromStack: (state) => {
      if (state.cur_size <= 0) {
        return;
      }
      state.cur_size -= 1;
      state.cur_value = state.stack.pop();
    },
  },
});

export const { addToStack, getFromStack } = stackSlice.actions;
export default stackSlice.reducer;
