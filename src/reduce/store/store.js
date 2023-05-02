import { configureStore } from "@reduxjs/toolkit";
import calenderSliceReducer from "../combine/calenderSlice";
import fifteenSliceReducer from "../combine/fifteenSlice";
import thirtySliceReducer from "../combine/thirtySlice";
import formSliceReducer from "../combine/formSlice";

const store = configureStore({
  reducer: {
    thirtySlice: thirtySliceReducer,
    fifteenSlice: fifteenSliceReducer,
    date: calenderSliceReducer,
    formSlice: formSliceReducer,
  },
});
export default store;
