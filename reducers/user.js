import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, firstname: null, username: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.firstname = action.payload.firstname;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.firstname = null;
      state.value.username = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
