import { createAction } from "@reduxjs/toolkit";

export const GET_USER_LOGIN = "getUserLogin";
export const userLogin = createAction(GET_USER_LOGIN)
export const REGISTER_USER = "registerUser";
export const userRegister = createAction(REGISTER_USER)
