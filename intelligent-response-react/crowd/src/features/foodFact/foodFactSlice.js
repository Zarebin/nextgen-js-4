import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  question : {},
  status: false,
};


export const foodFactSlice = createSlice({
  name: 'foodFact',
  initialState,
  reducers: {
	addQusestion: (state, action) => {
      state.question = action.payload;
      state.status = !state.status;
    }
  }
});

export const {addQusestion , addStatus} =foodFactSlice.actions;

export const selectQuestion = (state) => state.foodFact.question;
export const selectStatus = (state) => state.foodFact.status;

export default foodFactSlice.reducer;
