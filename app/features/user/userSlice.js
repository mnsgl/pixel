import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    user: {},
  },
  reducers: {
    setUser: (state, payload) => {
      state.user = payload.payload.user;
      state.isLogin = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
