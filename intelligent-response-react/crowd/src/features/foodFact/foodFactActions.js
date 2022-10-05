import { createAction } from "@reduxjs/toolkit";

export const GET_First_Case = "getFirstCase";
export const firstCase = createAction(GET_First_Case);
export const Send_Respond_Value = "sendRespondValue";
export const sendRespond = createAction(Send_Respond_Value);

