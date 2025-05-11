import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/features/theme/model/slice";
import chatReducer from "@/entities/chat/model/slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    chat: chatReducer,
  },
});
