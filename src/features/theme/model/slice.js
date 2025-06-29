import { createSlice } from "@reduxjs/toolkit";
import { LIGHT_THEME, DARK_THEME } from "./constants";

const GetInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || LIGHT_THEME;
  }
  return LIGHT_THEME;
};

const initialState = { value: GetInitialTheme() };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
    setTheme(state, action) {
      state.value = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer; // ← ЭТО ОБЯЗАТЕЛЬНО!
