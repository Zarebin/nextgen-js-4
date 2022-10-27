import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodFactData: {},
  isNextQue: false,
  responseData: {},
};

export const foodFactSlice = createSlice({
  name: "foodFact",
  initialState,

  reducers: {
    getInfoSlice: (state, action) => {
      state.foodFactData = action.payload;
      state.isNextQue = false;
    },

    postReqSlice: (state, action) => {
      state.responseData = action.payload;
      state.isNextQue = true;
    },
  },
});

export const { getInfoSlice, postReqSlice } = foodFactSlice.actions;
export const selectFoodFactInfo = (state) => state.foodFact.foodFactData;
export const selectFoodFactRes = (state) => state.foodFact.responseData;
export const selectIsNext = (state) => state.foodFact.isNextQue;

export default foodFactSlice.reducer;
