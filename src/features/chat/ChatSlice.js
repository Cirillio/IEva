import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  id: null,
  member: null,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat: (state, action) => {
      state.id = action.payload.id;
      state.member = action.payload.member;
      console.log(state.member);
      state.value = true;
    },
    closeChat: (state) => {
      state.id = null;
      state.value = false;
    },
  },
});

export const { openChat, closeChat } = chatSlice.actions;
export default chatSlice.reducer;
