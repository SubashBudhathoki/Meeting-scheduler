import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    Username: "",
    Useremail: "",
    guestmail:"",
    Usernote: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.Username = action.payload;
      console.log(state.Username);
    },
    setUseremail: (state, action) => {
        state.Useremail = action.payload;
      },

    setguestmail: (state, action) => {
      state.guestmail = action.payload;
    },
    setUsernote: (state, action) => {
      state.Usernote = action.payload;
    },
  },
});

export const { setUsername, setUseremail, setUsernote,setguestmail } = formSlice.actions;
export default formSlice.reducer;
