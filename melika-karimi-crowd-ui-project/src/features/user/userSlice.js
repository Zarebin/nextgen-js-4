import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  userList: {},
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //register
    addRegisterUsers: (state, action) => {
      console.log("im slice of register", state, action);
      state.userList = action.payload;
    },
    ///login
    addLoginUsers: (state, action) => {
      console.log("im slice of login", state, action);
      state.userList = action.payload;
    },
    ///logout
    addLogoutUsers: (state, action) => {
      console.log("im slice of logout", state, action);
      state.userList = "";
    },
  },
});

export const { addNewUsers, addLoginUsers, addLogoutUsers, addRegisterUsers } =
  userSlice.actions;

export const selectCount = (state) => state.user.userList;
export const selectusersLogin = (state) => state.user.userList;
export const selectusersRegister = (state) => state.user.userList;
export const selectusersLogout = (state) => state.user.userList;
export default userSlice.reducer;
