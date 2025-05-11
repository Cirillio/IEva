import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  username: "",
  password: "",
  isAuth: false,
  isAuthChecked: false,
};

export const selfSlice = createSlice({
  name: "self",
  initialState,
  reducers: {},
});

// export const { openChat, closeChat } = chatSlice.actions;
// export default chatSlice.reducer;
