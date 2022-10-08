import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user : null,
  nav:false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
	  addUser: (state, action) => {
      state.user = action.payload;
	  state.nav = !state.nav;
    },
	  removeUser: (state) => {
		  state.user = null;
		  state.nav = !state.nav;
	  }
  }
});

export const {addUser,removeUser} = userSlice.actions; 
export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.nav;
export const selectToken = (state) => state.user.user.token;

export default userSlice.reducer;
