import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import {
  StyledContainer,
  StyledFormHeader,
  StyledFormContainer,
  StyledInputContainer,
  StyledButtonContainer,
} from "./Register.styled";
import { Button} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { fetchRegisterAction } from "./../actions";
import { selectusersRegister } from "../userSlice";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(selectusersRegister);

  const { username, email, password } = registerData;

  useEffect(() => {
    if (user) {
      navigate("/food_fact");
    }
  }, [user, navigate, dispatch]);

  const handleChange = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitData = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
      email,
    };

    dispatch(fetchRegisterAction(userData));
  };

  return (
    <>
      <StyledContainer>
        <StyledFormHeader>
          <h1>
            <PersonIcon />
            Register
          </h1>
          <p>Please create an account</p>
        </StyledFormHeader>

        <StyledFormContainer>
          <form onSubmit={submitData}>
            <StyledInputContainer>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </StyledInputContainer>

            <StyledInputContainer>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
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
                disabled={username === "" || email === "" || password === ""}
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

export default Register;
