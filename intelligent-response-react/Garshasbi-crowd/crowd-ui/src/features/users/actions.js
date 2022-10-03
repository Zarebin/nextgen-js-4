import { createAction } from "@reduxjs/toolkit";

export const LOGIN_USERS = "users/login";
export const loginUsers = (loginInfo) => ({ type: LOGIN_USERS, loginInfo });

export const REGISTER_USERS = "users/register";
export const registerUsers = (userInfo) => ({ type: REGISTER_USERS, userInfo });

export const LOGOUT_USERS = "users/logout";
export const logoutUsers = createAction(LOGOUT_USERS);
