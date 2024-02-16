import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { firstname: null, username: null, content: null },
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    postTweet: (state, action) => {
      state.value.firstname = action.payload.firstname;
      state.value.username = action.payload.username;
      state.value.content = action.payload.content;
    },
  },
});

export const { postTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
