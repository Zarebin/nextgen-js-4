import React, { useState, useEffect } from "react";
import "./users.scss";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUsers } from "./actions";
import { selectusersLogin } from "./usersSlice";
import loginImg from "../../assets/login.gif";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selectusersLogin);

  const { username, password } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (user) {
      navigate("/food_fact");
    }
  }, [user]);

  const submitData = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };

    dispatch(loginUsers(userData));
  };

  return (
    <>
      <div className="main">
        <div className="usersImg">
          <img src={loginImg} alt="" />
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
                placeholder="Enter your username"
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

export default Login;
