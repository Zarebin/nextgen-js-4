import React, { useState, useEffect } from "react";
import { StyledContainer, StyledButton } from "./FoodFact.styled";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getProjectAction } from "./actions";
import {
  selectFoodFactInfo,
  selectFoodFactNextguestion,
} from "./foodFactSlice";
const FoodFact = () => {
  let nextQuestion = useAppSelector(selectFoodFactNextguestion);
  const dispatch = useAppDispatch();
  const { image_link, question_text } = useAppSelector(selectFoodFactInfo);
  useEffect(() => {
    dispatch(getProjectAction());
  }, [nextQuestion]);
  return (
    <>
      <StyledContainer>
        <p>{question_text}</p>
        <img src={image_link} alt="" />
        <div>
          <StyledButton>
            <HelpOutlineIcon sx={{ color: "#757471" }} />
            <p>not sure</p>
          </StyledButton>
          <StyledButton>
            <CloseIcon color="error" />
            <p>no</p>
          </StyledButton>

          <StyledButton>
            <CheckIcon color="success" />
            <p>yes</p>
          </StyledButton>
        </div>
      </StyledContainer>
    </>
  );
};
export default FoodFact;
