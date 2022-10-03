import { createAction } from "@reduxjs/toolkit";

export const GET_INFO = "foodFact/getInfo";
export const getFoodFactInfo = createAction(GET_INFO);

export const POST_REQ = "foodFact/postReq";
export const postFoodFactInfo = (info) => ({ type: POST_REQ, info });
