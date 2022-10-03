import React from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUsers } from "../features/users/actions";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import "./header.scss";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUsers());
    navigate("/");
  };

  return (
    <div className="header">
      <div className="imgHeader">
        <Link to="/">
          <img
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
            alt=""
          />
        </Link>
      </div>
      {user ? (
        <Button
          onClick={handleLogout}
          variant="contained"
          endIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button
            variant="contained"
            endIcon={<LoginIcon />}
            component={Link}
            to="/"
          >
            Login
          </Button>
          <Button
            variant="contained"
            endIcon={<PersonIcon />}
            component={Link}
            to="/Register"
          >
            Register
          </Button>
        </>
      )}
    </div>
  );
};

export default Header;
