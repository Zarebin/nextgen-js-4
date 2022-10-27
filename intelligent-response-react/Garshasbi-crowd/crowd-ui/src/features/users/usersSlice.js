import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    logUsers: (state, action) => {
      state.user = action.payload;
    },

    regUsers: (state, action) => {
      state.user = action.payload;
    },

    remUsers: (state, action) => {
      state.user = "";
    },
  },
});

export const { logUsers, regUsers, remUsers } = usersSlice.actions;
export const selectusersLogin = (state) => state.users.user;
export const selectusersRegister = (state) => state.users.user;
export const selectusersLogout = (state) => state.users.user;

export default usersSlice.reducer;
