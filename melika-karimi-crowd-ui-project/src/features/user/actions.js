import { createAction } from "@reduxjs/toolkit";
//register
export const SAMPLE_SET_REGISTER = "user/register";
export const fetchRegisterAction = (userInfo) => ({
  type: SAMPLE_SET_REGISTER,
  userInfo,
});
//login
export const SAMPLE_SET_LOGIN = "user/login";
export const fetchLoginAction = (loginInfo) => ({
  type: SAMPLE_SET_LOGIN,
  loginInfo,
});
///logout
export const SAMPLE_SET_LOGOUT = "user/logout";
export const fetchLogoutAction = createAction(SAMPLE_SET_LOGOUT);
