import { createSlice } from "@reduxjs/toolkit";

const calenderSlice = createSlice({
  name: "calenderSlice",
  initialState: {
    newdate: "",
    countryhour: "",
    day: "",
    month: "",
    time: "",
    countryname:""
  },
  reducers: {
    setdate: (state, action) => {
      state.newdate = action.payload;
      console.log(state.newdate)
    },
    setcountryhour: (state, action) => {
      state.countryhour = action.payload;
      console.log("hello")
    },
    setcountryname: (state, action) => {
      state.countryname= action.payload;
      
    },
    setday: (state, action) => {
      state.day = action.payload;
      console.log(state.day);
    },
    setmonth: (state, action) => {
      state.month = action.payload;
      console.log(state.month);
    },
    settime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { setdate, setcountryhour, setday, setmonth, settime,setcountryname } =
  calenderSlice.actions;
export default calenderSlice.reducer;
