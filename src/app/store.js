import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import chatReducer from "../features/chat/ChatSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    chat: chatReducer,
  },
});
