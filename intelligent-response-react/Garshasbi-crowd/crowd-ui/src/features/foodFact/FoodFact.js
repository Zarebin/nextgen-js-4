import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { getFoodFactInfo, postFoodFactInfo } from "./action";
import {
  selectFoodFactInfo,
  selectFoodFactRes,
  selectIsNext,
} from "./foodFactSlice";

import "./foodFact.scss";

const FoodFact = () => {
  const dispatch = useDispatch();
  let isNextQue = useSelector(selectIsNext);

  const { image_link, question_text, question_id } =
    useSelector(selectFoodFactInfo);

  useEffect(() => {
    dispatch(getFoodFactInfo());
  }, [isNextQue]);

  return (
    <>
      <div className="card">
        <p>{question_text}</p>
        <img src={image_link} alt="" />
        <div>
          <button
            className="reqBtn"
            onClick={(e) => dispatch(postFoodFactInfo("2"))}
          >
            <HelpOutlineIcon sx={{ color: "#757471" }} />
            <p>not sure</p>
          </button>

          <button
            className="reqBtn"
            onClick={(e) => dispatch(postFoodFactInfo("1"))}
          >
            <CloseIcon color="error" />
            <p>no</p>
          </button>

          <button
            className="reqBtn"
            onClick={(e) => dispatch(postFoodFactInfo("0"))}
          >
            <CheckIcon color="success" />
            <p>yes</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodFact;
