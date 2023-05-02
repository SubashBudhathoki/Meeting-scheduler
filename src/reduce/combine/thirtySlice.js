import { createSlice } from "@reduxjs/toolkit";

const thirtySlice = createSlice({
  name: "thirtySlice",
  initialState: {
    thirtyValue: "30 Minutes Meeting",
    thirty:"30",
    tpage:"30min"

  },
  reducers: {
    setthirtyValue: (state, action) => {
      state.thirtyValue = action.payload;
    },
  },
});

export const { setthirtyValue } = thirtySlice.actions;
export default thirtySlice.reducer;
