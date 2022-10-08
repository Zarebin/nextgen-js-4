import { createAction } from "@reduxjs/toolkit";
//getProject
export const SAMPLE_GET_PROJECT = "project/get";
export const getProjectAction = createAction(SAMPLE_GET_PROJECT);

///postProject
export const SAMPLE_POST_PROJECT = "project/post";
export const postProjectAction = (info) => ({
  type: SAMPLE_POST_PROJECT,
  info,
});
