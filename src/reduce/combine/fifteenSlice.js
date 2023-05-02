import { createSlice } from "@reduxjs/toolkit";

const fifteenSlice = createSlice({
  name: "fifteenSlice",
  initialState: {
    fifteenValue: "15 Minutes Meeting",
    fifteen:"15",
    fpage:"15min"
  },
  reducers: {
    setfifteenValue: (state, action) => {
      state.fifteenValue = action.payload;
    },
  },
});

export const { setfifteenValue } = fifteenSlice.actions;
export default fifteenSlice.reducer;
