import { createAction } from "@reduxjs/toolkit";

export const ASYNC_ACTION = "sample/data";
export const fetchData = createAction(ASYNC_ACTION);
