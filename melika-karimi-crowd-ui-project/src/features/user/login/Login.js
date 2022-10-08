import React, { useState, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";
import {
  StyledContainer,
  StyledFormHeader,
  StyledFormContainer,
  StyledInputContainer,
  StyledButtonContainer,
} from "../register/Register.styled";
import { Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { useNavigate } from "react-router-dom";
import { selectusersLogin } from "../userSlice";
import { fetchLoginAction } from "../actions";
const Login = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(selectusersLogin);
  const { username, password } = registerData;
  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (user) {
      navigate("/food_fact");
    }
  }, [user, navigate, dispatch]);

  const submitData = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };

    dispatch(fetchLoginAction(userData));
  };
  return (
    <>
      <StyledContainer>
        <StyledFormHeader>
          <h1>
            <LoginIcon />
            Login
          </h1>
          <p>Please login to your account</p>
        </StyledFormHeader>
        <StyledFormContainer>
          <form onSubmit={submitData}>
            <StyledInputContainer>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleChange}
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </StyledInputContainer>

            <StyledButtonContainer>
              <Button
                disabled={username === "" || password === ""}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </StyledButtonContainer>
          </form>
        </StyledFormContainer>
      </StyledContainer>
    </>
  );
};

export default Login;
