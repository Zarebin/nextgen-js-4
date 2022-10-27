import React, { useState, useEffect } from "react";
import "./users.scss";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUsers } from "./actions";
import { selectusersRegister } from "./usersSlice";
import registerImg from "../../assets/register.gif";
import TextField from "@mui/material/TextField";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(selectusersRegister);

  const { username, email, password } = data;

  useEffect(() => {
    if (user) {
      navigate("/food_fact");
    }
  }, [user]);

  const handleChange = (e) => {
    setData((prevState) => ({
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

    dispatch(registerUsers(userData));
  };

  return (
    <>
      <div className="main">
        <div className="usersImg">
          <img src={registerImg} alt="" />
        </div>
        <div className="usersForm">
          <form onSubmit={submitData}>
            <div className="inputsForm">
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                type="text"
                name="username"
                value={username}
                placeholder="Enter your name"
                onChange={handleChange}
              />

              <TextField
                style={{ marginTop: 20 }}
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleChange}
              />

              <TextField
                style={{ marginTop: 20 }}
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>

            <div className="usersBtn">
              <Button
                disabled={username === "" || password === ""}
                variant="contained"
                color="primary"
                type="submit"
                style={{ height: "100%", width: 200 }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
