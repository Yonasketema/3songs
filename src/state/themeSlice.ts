import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  dark_mode: boolean;
}

const initialState: initialState = {
  dark_mode: false,
};

const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toggle: (state) => {
      state.dark_mode = !state.dark_mode;
    },
  },
});

export const { toggle } = themesSlice.actions;

export default themesSlice.reducer;
