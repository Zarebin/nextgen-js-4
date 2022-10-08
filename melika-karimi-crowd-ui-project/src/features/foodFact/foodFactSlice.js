import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  foodFactData: {},
  responseData: {},
  isquestion: false,
};
export const foodFactSlice = createSlice({
  name: "foodFact",
  initialState,
  reducers: {
    getProjectSlice: (state, action) => {
      console.log("i am slice and received data", state, action);
      state.foodFactData = action.payload;
      state.isquestion = false;
    },
    postProjectSlice: (state, action) => {
      console.log("i am slice and received data", state, action);
      state.responseData = action.payload;
      state.isquestion = true;
    },
  },
});
export const { getProjectSlice, postProjectSlice } = foodFactSlice.actions;
export const selectFoodFactInfo = (state) => state.project.foodFactData;
export const selectFoodFactRes = (state) => state.project.responseData;
export const selectFoodFactNextguestion = (state) => state.project.isquestion;
export default foodFactSlice.reducer;
